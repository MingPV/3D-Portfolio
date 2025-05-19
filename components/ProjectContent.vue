<template>
  <div
    ref="rootDiv"
    class="flex flex-row absolute left-0 w-full top-0 h-full justify-center items-center gap-12 duration-500 transition-all"
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
      class="flex flex-col w-[60%] mr-[5%] h-4/5 items-center font-serif bg-stone-700/70 backdrop-blur-md rounded-md"
    >
      <div class="w-full my-8 font-serif text-3xl text-stone-200/80 font-bold">
        Project
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const rootDiv = ref<HTMLElement | null>(null);

onMounted(() => {
  if (rootDiv.value) {
    // rootDiv.value.classList.add("translate-x-20");
    // rootDiv.value.classList.add("animate-once");
    // function handleAnimationEnd() {
    //   rootDiv.value?.classList.remove("translate-x-20");
    //   rootDiv.value?.classList.remove("animate-once");
    //   rootDiv.value?.removeEventListener("animationend", handleAnimationEnd);
    // }
    // rootDiv.value.addEventListener("animationend", handleAnimationEnd);
  }
});
</script>

<style></style>
