<template>
  <div>
    <!-- Fixed Navbar -->
    <nav
      class="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white shadow-md backdrop-blur-md z-50"
    >
      <div
        class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center"
      >
        <div
          class="text-2xl font-semibold hover:cursor-pointer"
          @click="sceneStore.setSection(0)"
        >
          MingPV
        </div>
        <ul class="flex gap-6 text-sm font-medium">
          <li>
            <div
              class="hover:text-gray-300 transition hover:cursor-pointer"
              @click="sceneStore.setSection(0)"
            >
              Home
            </div>
          </li>
          <li>
            <div
              class="hover:text-gray-300 transition hover:cursor-pointer"
              @click="sceneStore.setSection(1)"
            >
              About
            </div>
          </li>
          <li>
            <div
              class="hover:text-gray-300 transition hover:cursor-pointer"
              @click="sceneStore.setSection(2)"
            >
              Experience
            </div>
          </li>
          <li>
            <div
              class="hover:text-gray-300 transition hover:cursor-pointer"
              @click="sceneStore.setSection(3)"
            >
              Project
            </div>
          </li>
          <li>
            <div
              class="hover:text-gray-300 transition hover:cursor-pointer"
              @click="sceneStore.setSection(4)"
            >
              Contact
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Push content down below the navbar -->
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const sceneStore = useSceneStore();
</script>

<style></style>
