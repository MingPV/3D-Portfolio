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
      <!-- <h1 class="text-4xl font-bold">
        {{ sectionContents[store.currentSection].title }}
      </h1>
      <p class="text-xl mt-2">
        {{ sectionContents[store.currentSection].desc }}
      </p> -->
      <template v-if="store.currentSection === 0">
        <KeepAlive>
          <HelloContent />
        </KeepAlive>
      </template>
      <template v-else-if="store.currentSection === 1">
        <KeepAlive>
          <AboutContent />
        </KeepAlive>
      </template>
      <template v-else-if="store.currentSection === 2">
        <KeepAlive>
          <EducationContent />
        </KeepAlive>
      </template>
      <template v-else-if="store.currentSection === 3">
        <KeepAlive>
          <ProjectContent />
        </KeepAlive>
      </template>
      <template v-else-if="store.currentSection === 4">
        <KeepAlive>
          <ContactContent />
        </KeepAlive>
      </template>
    </div>

    <ThreeScene />
  </div>
</template>

<style scoped></style>
