/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { defineStore } from "pinia";
import * as THREE from "three";
import gsap from "gsap";

export const useSceneStore = defineStore("scene", {
  state: () => ({
    currentSection: 0,
    camera: null as THREE.PerspectiveCamera | null,
    controls: null as any,
    cameraPositions: [] as {
      position: { x: number; y: number; z: number };
      target: { x: number; y: number; z: number };
    }[],
  }),

  actions: {
    setCamera(camera: THREE.PerspectiveCamera) {
      this.camera = camera;
    },

    setControls(controls: any) {
      this.controls = controls;
    },

    setCameraPositions(
      positions: {
        position: { x: number; y: number; z: number };
        target: { x: number; y: number; z: number };
      }[]
    ) {
      this.cameraPositions = positions;
    },

    setSection(index: number) {
      if (index < 0 || index >= this.cameraPositions.length) {
        console.warn(`Section ${index} is out of bounds.`);
        return;
      }

      if (index === this.currentSection) {
        console.info(`Already in section ${index}.`);
        return;
      }

      this.currentSection = index;
      this.moveCameraToCurrentSection();
    },

    nextSection() {
      if (this.currentSection < this.cameraPositions.length - 1) {
        this.currentSection++;
        this.moveCameraToCurrentSection();
      } else {
        console.info("Already at last section.");
      }
    },

    prevSection() {
      if (this.currentSection > 0) {
        this.currentSection--;
        this.moveCameraToCurrentSection();
      } else {
        console.info("Already at first section.");
      }
    },

    moveCameraToCurrentSection() {
      if (!this.camera || !this.controls) {
        console.warn("Camera or controls not set yet.");
        return;
      }

      const target = this.cameraPositions[this.currentSection];
      if (!target) {
        console.warn(
          `No camera position found for section ${this.currentSection}`
        );
        return;
      }

      // Animate camera position
      gsap.to(this.camera.position, {
        x: target.position.x,
        y: target.position.y,
        z: target.position.z,
        duration: 2,
        ease: "power2.out",
      });

      // Animate camera lookAt target
      const lookAt = {
        x: this.controls.target.x,
        y: this.controls.target.y,
        z: this.controls.target.z,
      };

      gsap.to(lookAt, {
        x: target.target.x,
        y: target.target.y,
        z: target.target.z,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          this.controls.target.set(lookAt.x, lookAt.y, lookAt.z);
          this.controls.update();
        },
      });
    },
  },
});
