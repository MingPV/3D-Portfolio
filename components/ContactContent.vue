<template>
  <div class="absolute w-full h-full flex flex-col justify-center items-center">
    <div
      class="flex flex-col w-[60%] h-fit py-24 px-32 items-center justify-center shadow-lg shadow-black/30 backdrop-blur-md"
    >
      <div class="text-stone-800/70 text-6xl font-serif font-bold">
        Get in touch
      </div>
      <div class="text-stone-700/60 mt-6">
        I'm always excited to make new connections, hear about new ideas, and
        explore potential opportunities, so please feel free to reach out to me
        at
      </div>
      <!-- Email + Copy Button -->
      <div class="flex items-center gap-2 mt-6 justify-center">
        <span class="text-stone-800/70">jeung.pavee@gmail.com</span>
        <button class="transition flex justify-center" @click="copyEmail">
          <Icon
            v-show="!isCopied"
            name="tabler:copy"
            class="text-stone-700/70 duration-300 transition-all text-xl"
          />
          <Icon
            v-show="isCopied"
            name="tabler:copy-check"
            class="text-stone-700/70 duration-300 transition-all text-xl"
          />
        </button>
      </div>
      <div class="flex flex-row gap-6 mt-8">
        <button class="bg-stone-700/70 px-4 py-2 rounded-md">Say Hello</button>
        <button class="bg-stone-700/70 px-4 py-2 rounded-md">Get Resume</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isCopied = ref(false);

const copyEmail = () => {
  const email = "jeung.pavee@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 3000);
  });
};
</script>

<style></style>
