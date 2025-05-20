<script setup>
import { useSceneStore } from "~/stores/sceneStore";
const store = useSceneStore();

// const sectionContents = [
//   <HelloContent />,
//   <HelloContent />,
//   <HelloContent />,
//   <HelloContent />,
// ];
</script>

<template>
  <div>
    <div
      class="absolute top-0 left-0 w-full h-[100vh] text-center z-40 text-white"
    >
      <Transition name="fade" mode="out-in">
        <KeepAlive>
          <HelloContent v-show="store.currentSection === 0" />
        </KeepAlive>
      </Transition>
      <Transition name="fade" mode="out-in"
        ><KeepAlive
          ><AboutContent v-show="store.currentSection === 1" /></KeepAlive
      ></Transition>
      <Transition name="fade" mode="out-in"
        ><KeepAlive
          ><ExperienceContent v-show="store.currentSection === 2" /></KeepAlive
      ></Transition>
      <Transition name="fade" mode="out-in"
        ><KeepAlive
          ><ProjectContent v-show="store.currentSection === 3" /></KeepAlive
      ></Transition>
      <Transition name="fade" mode="out-in"
        ><KeepAlive
          ><ContactContent v-show="store.currentSection === 4" /></KeepAlive
      ></Transition>
    </div>

    <ThreeScene />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
