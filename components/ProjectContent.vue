<template>
  <div
    ref="rootDiv"
    class="flex flex-row absolute left-0 w-full top-0 h-full justify-center items-center duration-500 transition-all"
  >
    <div class="flex flex-col flex-1 h-4/5 items-start justify-start">
      <!-- <img
        src="/images/mingming.png"
        class="mt-8 border-white shadow-xl shadow-black/50 rounded-full"
        alt="MingPV"
        width="300"
        height="300"
        sizes="(max-width: 400px) 100vw, 400px"
        loading="lazy"
        placeholder="blur"
      /> -->
    </div>
    <div
      class="flex flex-col w-[90%] md:w-[60%] h-4/5 items-center font-serif bg-stone-700/70 backdrop-blur-md rounded-md pb-6"
    >
      <div class="w-full my-8 font-serif text-3xl text-stone-200/80 font-bold">
        My Work & Contributions
      </div>
      <div class="w-full h-fit grid grid-cols-2 gap-4 px-4 overflow-y-scroll">
        <div
          class="bg-stone-900/40 flex flex-col gap-2 items-start rounded-md pb-4 px-2 pt-2"
        >
          <div class="flex w-full justify-center mt-2">
            <NuxtImg
              src="/images/Gameshelf-1.png"
              width="400"
              height="200"
              class="shadow-lg"
              format="webp"
              placeholder
            />
          </div>
          <div class="ml-8 my-2 text-stone-100/80 font-semibold">
            GameShelf - boardgame rental website
          </div>
          <div class="ml-4 mr-1 text-stone-100 text-start text-md">
            Comprehensive web platform for renting board games, designed to
            streamline the entire rental process for both customers and
            providers. The system integrates essential services to create a
            seamless user experience from browsing to payment and management.
          </div>
          <div class="flex w-full h-full justify-end items-end">
            <a
              class="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-white/60"
              href="https://github.com/MingPV/Game-Shelf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <Icon
                name="material-symbols:arrow-right-alt"
                class="duration-300 transition-all text-xl text-stone-200"
              />
            </a>
          </div>
        </div>
        <div
          class="bg-stone-900/40 flex flex-col gap-2 items-start rounded-md pb-4 px-2 pt-2"
        >
          <div class="flex w-full justify-center mt-2 bg-black/60">
            <NuxtImg
              src="/images/vocab_1.png"
              width="100"
              height="200"
              class="shadow-lg"
              format="webp"
              placeholder
            />
          </div>
          <div class="ml-8 my-2 text-stone-100/80 font-semibold">
            3000Words - IOS app
          </div>
          <div class="ml-4 mr-1 text-stone-100 text-start text-md">
            A simple and lightweight iOS application that displays a curated
            list of 3000 essential English vocabulary words. Designed with a
            minimal interface using SwiftUI.
          </div>
          <div class="flex w-full h-full justify-end items-end">
            <a
              class="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-white/60"
              href="https://github.com/MingPV/3000Words-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <Icon
                name="material-symbols:arrow-right-alt"
                class="duration-300 transition-all text-xl text-stone-200"
              />
            </a>
          </div>
        </div>
        <div
          class="bg-stone-900/40 flex flex-col gap-2 items-start rounded-md pb-4 px-2 pt-2"
        >
          <div class="flex w-full justify-center mt-2">
            <NuxtImg
              src="/images/RiderChat1.png"
              width="400"
              height="200"
              class="shadow-lg"
              format="webp"
              placeholder
            />
          </div>
          <div class="ml-8 my-2 text-stone-100/80 font-semibold">
            Riderchat - web chat
          </div>
          <div class="ml-4 mr-1 text-stone-100 text-start text-md">
            This project is a real-time chat web application that enables users
            to communicate efficiently and interactively. The platform offers a
            variety of features designed to support both private and group
            communication.
          </div>
          <div class="flex w-full h-full justify-end items-end">
            <a
              class="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-white/60"
              href="https://github.com/MingPV/WebChat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <Icon
                name="material-symbols:arrow-right-alt"
                class="duration-300 transition-all text-xl text-stone-200"
              />
            </a>
          </div>
        </div>
        <div
          class="bg-stone-900/40 flex flex-col gap-2 items-start rounded-md pb-4 px-2 pt-2"
        >
          <div class="flex w-full justify-center mt-2">
            <NuxtImg
              src="/images/dental_1.png"
              width="400"
              height="200"
              class="shadow-lg"
              format="webp"
              placeholder
            />
          </div>
          <div class="ml-8 my-2 text-stone-100/80 font-semibold">
            Dental Booking - backend service
          </div>
          <div class="ml-4 mr-1 text-stone-100 text-start text-md">
            A simple backend service for scheduling dental appointments. Built
            with NestJS and secured with Passport.js for user authentication.
          </div>
          <div class="flex w-full h-full justify-end items-end">
            <a
              class="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-white/60"
              href="https://github.com/MingPV/dental-booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <Icon
                name="material-symbols:arrow-right-alt"
                class="duration-300 transition-all text-xl text-stone-200"
              />
            </a>
          </div>
        </div>
        <div
          class="bg-stone-900/40 flex flex-col gap-2 items-start rounded-md pb-4 px-2 pt-2"
        >
          <div class="flex w-full justify-center mt-2">
            <NuxtImg
              src="/images/chess_1.png"
              width="400"
              height="200"
              class="shadow-lg"
              format="webp"
              placeholder
            />
          </div>
          <div class="ml-8 my-2 text-stone-100/80 font-semibold">
            Chess Detection - YOLOv8
          </div>
          <div class="ml-4 mr-1 text-stone-100 text-start text-md">
            This project uses YOLOv8 to detect chessboards and track piece
            movements from video frames. It focuses on identifying board layout
            and detecting changes in piece positions over time.
          </div>
          <div class="flex w-full h-full justify-end items-end">
            <!-- <a
              class=" flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-white/60"
              href="https://github.com/MingPV/Game-Shelf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <Icon
                name="material-symbols:arrow-right-alt"
                class="duration-300 transition-all text-xl text-stone-200"
              />
            </a> -->
          </div>
        </div>
        <div
          class="bg-stone-900/40 flex flex-col gap-2 items-start rounded-md pb-4 px-2 pt-2"
        >
          <div class="flex w-full justify-center mt-2">
            <NuxtImg
              src="/images/portfolio_1.png"
              width="400"
              height="200"
              class="shadow-lg"
              format="webp"
              placeholder
            />
          </div>
          <div class="ml-8 my-2 text-stone-100/80 font-semibold">
            Portfolio - 3D website
          </div>
          <div class="ml-4 mr-1 text-stone-100 text-start text-md">
            A modern portfolio website featuring interactive 3D graphics built
            with Three.js for dynamic visuals and Nuxt.js for server-side
            rendering and smooth user experience. The site showcases projects
            and skills with engaging 3D elements and animations.
          </div>
          <div class="flex w-full h-full justify-end items-end">
            <a
              class="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-white/60"
              href="https://github.com/MingPV/3D-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <Icon
                name="material-symbols:arrow-right-alt"
                class="duration-300 transition-all text-xl text-stone-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="md:flex flex-col hidden w-[5%] h-4/5 justify-center items-center"
    >
      <Icon
        name="hugeicons:vertical-scroll-point"
        class="duration-300 transition-all text-4xl text-stone-700/70 animate-pulse"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const rootDiv = ref<HTMLElement | null>(null);

onMounted(() => {});
</script>

<style></style>
