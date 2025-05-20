<template>
  <div
    ref="rootDiv"
    class="flex flex-row absolute left-0 w-full top-0 h-full justify-center items-center gap-12 duration-500 transition-all"
  >
    <div
      class="flex flex-row w-[95%] md:w-[80%] ml-12 h-4/5 items-start justify-center font-serif bg-stone-700/70 backdrop-blur-md rounded-md"
    >
      <div class="w-1/3 h-full pt-6 flex flex-col items-center justify-start">
        <!-- <img
          src="/images/mingming.png"
          class="mt-4 ml-4 border-stone-700 shadow-xl shadow-black/50"
          alt="MingPV"
          width="300"
          height="300"
          sizes="(max-width: 400px) 100vw, 400px"
          loading="lazy"
          placeholder="blur"
        /> -->
        <NuxtImg
          src="/images/mingming.png"
          alt="MingPV"
          width="300"
          height="300"
          class="rounded-lg shadow-lg"
          format="webp"
          placeholder
        />
        <div class="flex flex-col items-start w-full mt-8 gap-3">
          <div class="font-bold text-stone-100 ml-10">
            Name: Ming
            <span class="font-extralight text-sm ml-4 text-stone-200"
              >(21 years old)</span
            >
          </div>
          <div class="font-bold text-stone-100 ml-10">
            Fullname: Pavee Jeungtanasirikul
          </div>
          <div class="flex flex-row items-center gap-4 mt-2 ml-6">
            <Icon
              name="uil:github"
              class="text-stone-100/80 duration-300 transition-all text-3xl"
            />
            <a
              href="https://github.com/MingPV"
              class="text-stone-200/90 hover:text-stone-100 text-sm"
            >
              https://github.com/MingPV
            </a>
          </div>
          <div class="flex flex-row flex-wrap items-center gap-4 ml-6">
            <Icon
              name="devicon:linkedin"
              class="duration-300 transition-all text-3xl"
            />
            <a
              href="https://www.linkedin.com/in/mingpv/"
              class="text-stone-200/90 hover:text-stone-100 text-sm"
            >
              https://www.linkedin.com/in/mingpv/
            </a>
          </div>
        </div>
      </div>
      <div class="w-2/3 h-full flex flex-col justify-start mx-6 pt-12 pb-10">
        <div class="text-7xl font-bold mb-4 text-stone-300/90">About Me</div>
        <div class="ml-8 mt-2 text-stone-200/70">
          Hi, I'm Ming, a computer engineering student from Thailand with a
          passion for web and software development. I have experience in various
          programming languages and frameworks, and I am always eager to learn
          new technologies.
        </div>
        <div
          class="w-full h-full bg-stone-900/40 mt-4 flex flex-col gap-2 justify-start items-start overflow-y-scroll"
        >
          <div class="m-4 mx-6 w-full flex justify-start items-start flex-col">
            <div class="font-bold text-stone-200">Languages</div>
            <div
              class="flex flex-wrap gap-4 font-semibold font-sans ml-2 text-stone-400"
            >
              <div>TypeSript</div>
              <div>JavaScript</div>
              <div>Python</div>
              <div>C++</div>
              <div>Java</div>
            </div>
          </div>
          <div class="m-4 mx-6 w-full flex justify-start items-start flex-col">
            <div class="font-bold text-stone-200">Tools</div>
            <div class="flex flex-col items-start">
              <div
                class="flex flex-wrap gap-4 font-semibold font-sans ml-2 text-stone-400"
              >
                <div>React</div>
                <div>NextJS</div>
                <div>VueJS</div>
                <div>NuxtJS</div>
                <div>Tailwind</div>
                <div>jQuery</div>
                <div>NestJS</div>
                <div>ExpressJS</div>
              </div>
              <div
                class="flex flex-wrap gap-4 font-semibold font-sans ml-2 text-stone-400"
              >
                <div>MongoDB</div>
                <div>MySQL</div>
                <div>PostgreSQL</div>
                <div>Firebase</div>
                <div>Supabase</div>
                <div>AWS</div>
              </div>
              <div
                class="flex flex-wrap gap-4 font-semibold font-sans ml-2 text-stone-400"
              >
                <div>Docker</div>
                <div>Git</div>
                <div>Github</div>
              </div>
            </div>
          </div>
          <div class="m-4 mx-6 w-full flex justify-start items-start flex-col">
            <div class="font-bold text-stone-200">Learning / Improving</div>
            <div class="flex flex-col ml-2 items-start">
              <div
                class="flex flex-wrap gap-4 font-semibold font-sans text-stone-400"
              >
                <div>GO</div>
                <div>Rust</div>
              </div>
              <div
                class="flex flex-wrap gap-4 font-semibold font-sans text-stone-400"
              >
                <div>Redis</div>
                <div>GORM</div>
                <div>Fiber</div>
                <div>ThreeJS</div>
                <div>Kafka</div>
              </div>
              <div
                class="flex flex-wrap gap-4 font-semibold font-sans text-stone-400"
              >
                <div>Jest</div>
                <div>Cucumber</div>
                <div>Playwright</div>
                <div>Scikit-learn</div>
                <div>PyTorch</div>
                <div>YOLO</div>
              </div>
              <div
                class="flex flex-wrap gap-4 font-semibold font-sans text-stone-400"
              >
                <div>Kubernetes</div>
                <div>GitHub Actions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-[30%] h-4/5 items-start justify-start">
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
