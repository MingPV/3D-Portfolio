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
    <div class="absolute top-10 left-0 w-full text-center z-50 text-white">
      <!-- <h1 class="text-4xl font-bold">
        {{ sectionContents[store.currentSection].title }}
      </h1>
      <p class="text-xl mt-2">
        {{ sectionContents[store.currentSection].desc }}
      </p> -->
      <template v-if="store.currentSection === 0">
        <HelloContent />
      </template>
      <template v-else-if="store.currentSection === 1">
        <AboutContent />
      </template>
      <template v-else-if="store.currentSection === 2">
        <EducationContent />
      </template>
      <template v-else-if="store.currentSection === 3">
        <ProjectContent />
      </template>
      <template v-else-if="store.currentSection === 4">
        <ContactContent />
      </template>
    </div>

    <ThreeScene />
  </div>
</template>

<style scoped></style>
