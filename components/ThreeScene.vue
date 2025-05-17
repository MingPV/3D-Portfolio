<template>
  <canvas
    ref="canvas"
    style="width: 100vw; height: 100vh; display: block"
  ></canvas>
  <GltfModel
    path="/models/house/scene.gltf"
    :position="[0, 0.4, 0]"
    :scale="[0.01, 0.01, 0.01]"
    :rotation="[0, 0, 0]"
    @loaded="onModelLoaded"
  />
  <GltfModel
    path="/models/cat/scene.gltf"
    :position="[0, 1.265, 2.2]"
    :scale="[1, 1, 1]"
    :rotation="[0, -70, 0]"
    @loaded="onModelLoaded"
  />
  <GltfModel
    path="/models/shiba/scene.gltf"
    :position="[0.9, 0.8, -1.8]"
    :scale="[0.4, 0.4, 0.4]"
    :rotation="[0, 60, 0]"
    @loaded="onModelLoaded"
  />
  <GltfModel
    path="/models/strong_chicken/scene.gltf"
    :position="[-1.4, 7, -1.5]"
    :scale="[0.7, 0.7, 0.7]"
    :rotation="[0, 90, 0]"
    @loaded="onModelLoaded"
  />
</template>

<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const canvas = ref(null);

let renderer, scene, camera, animationId, controls;
const models = [];

const keysPressed = {};

onMounted(() => {
  // create Scene
  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xfff5e1); // cream color
  scene.background = createGradientTexture(); // cream color

  // create Camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    4000
  );

  // create Renderer and bind canvas element
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true; // ✅ เปิดเงา
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // (optional) ทำให้เงานุ่ม

  camera.position.set(8, 1, 1); // angle
  camera.lookAt(0, 0, 0); // look at the center

  // ✅ create OrbitControls (must be after camera and renderer)
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // smooth movement
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  controls.maxPolarAngle = Math.PI / 2; // fixed angle

  window.addEventListener("keydown", onKeyDown);

  window.addEventListener("keyup", onKeyUp);

  const speed = 0.1;

  // add axis
  // const axesHelper = new THREE.AxesHelper(10);
  // scene.add(axesHelper);

  // light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  // Directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
  directionalLight.position.set(10, 40, 10);
  directionalLight.target.position.set(0, 0, 0); // ส่องไปยังกลางพื้น
  directionalLight.castShadow = true;
  const shadowCam = directionalLight.shadow.camera;
  directionalLight.shadow.bias = -0.002;
  directionalLight.shadow.normalBias = 0.02;
  shadowCam.left = -30;
  shadowCam.right = 30;
  shadowCam.top = 30;
  shadowCam.bottom = -30;
  shadowCam.near = 0.5;
  shadowCam.far = 100;
  shadowCam.updateProjectionMatrix();
  scene.add(directionalLight);

  // (optional) ปรับรายละเอียดเงา
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;

  const hemiLight = new THREE.HemisphereLight(0xcceeff, 0xffffff, 0.6);
  scene.add(hemiLight);

  // Animation Loop
  const animate = () => {
    animationId = requestAnimationFrame(animate);

    // get forward and right vectors
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();

    if (keysPressed["w"]) {
      camera.position.addScaledVector(dir, speed);
      controls.target.addScaledVector(dir, speed);
    }
    if (keysPressed["s"]) {
      camera.position.addScaledVector(dir, -speed);
      controls.target.addScaledVector(dir, -speed);
    }
    if (keysPressed["a"]) {
      camera.position.addScaledVector(right, -speed);
      controls.target.addScaledVector(right, -speed);
    }
    if (keysPressed["d"]) {
      camera.position.addScaledVector(right, speed);
      controls.target.addScaledVector(right, speed);
    }

    if (keysPressed[" "]) {
      camera.position.y += speed;
      controls.target.y += speed;
    }
    if (keysPressed["shift"]) {
      camera.position.y -= speed;
      controls.target.y -= speed;
    }

    controls.update();
    // console.log("Camera position:", camera.position);sa

    renderer.render(scene, camera);
  };

  animate();

  // resize screen
  window.addEventListener("resize", onWindowResize);
});

function onKeyDown(e) {
  keysPressed[e.key.toLowerCase()] = true;
}

function onKeyUp(e) {
  keysPressed[e.key.toLowerCase()] = false;
}

function onModelLoaded(mesh) {
  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true; // send shadow
      child.receiveShadow = true; // receive shadow
    }
  });

  scene.add(mesh);
  models.push(mesh);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function createGradientTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.sqrt(centerX ** 2 + centerY ** 2); // ระยะจากกลางถึงมุม

  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    radius
  );
  gradient.addColorStop(0, "#ffffff"); // center
  gradient.addColorStop(1, "#b6b3a2"); // edges/corners

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

onBeforeUnmount(() => {
  window.removeEventListener("resize", onWindowResize);
  cancelAnimationFrame(animationId);
  controls.dispose(); // ✅ dispose controls
  window.removeEventListener("keydown", onKeyDown);
  window.removeEventListener("keyup", onKeyUp);
  renderer.dispose();
  scene.clear();
});
</script>

<style scoped>
#info {
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
</style>
