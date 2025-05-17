<script setup>
import { onMounted } from "vue";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const props = defineProps({
  path: String,
  position: { type: Array, default: () => [0, 0, 0] },
  scale: { type: Array, default: () => [1, 1, 1] },
  rotation: { type: Array, default: () => [0, 0, 0] },
});
const emit = defineEmits(["loaded"]);

onMounted(() => {
  const loader = new GLTFLoader();
  loader.load(props.path, (gltf) => {
    const model = gltf.scene;

    // ✅ ใส่ model ลงในกลุ่มใหม่เพื่อควบคุมได้ง่าย
    const group = new THREE.Group();
    group.add(model);

    console.log(model);
    console.log(props.position);

    group.position.set(...props.position);
    group.scale.set(...props.scale);
    group.rotation.set(
      ...props.rotation.map((r) => THREE.MathUtils.degToRad(r))
    );

    // const axes = new THREE.AxesHelper(1000);
    // group.add(axes);

    emit("loaded", group);
  });
});
</script>
