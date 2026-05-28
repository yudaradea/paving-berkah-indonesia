<script setup>
import { ref, onUnmounted } from 'vue';

const section = ref(null);
const emit = defineEmits(['setActiveSection']);

const handleScroll = () => {
  if (
    section.value &&
    section.value.getBoundingClientRect().top < window.innerHeight / 2
  ) {
    emit('setActiveSection', 'hero');
  }
};

window.addEventListener('scroll', handleScroll);

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section id="hero" class="" ref="section">
    <div
      class="relative w-full flex justify-center items-center rounded-t-2xl bg-hero-image h-[500px] bg-cover bg-center bg-no-repeat lg:h-[600px]"
    >
      <div class="w-full h-full bg-primary/40 rounded-t-2xl"></div>
      <div class="absolute flex items-center justify-center">
        <div
          class="p-6 text-center shadow-xl bg-white/50 shadow-primary/50 rounded-2xl md:p-8 lg:p-10 backdrop-blur-sm"
        >
          <h1
            class="text-4xl font-bold leading-relaxed tracking-wide md:leading-relaxed md:text-5xl lg:text-6xl lg:leading-snug"
          >
            PT. BETON CIPTA <br />
            LABUAN
          </h1>
          <p class="pt-2 font-bold md:text-base lg:text-xl lg:pt-1">
            Company Profile
          </p>
          <div class="pt-6">
            <button
              class="w-10 h-10 text-white rounded-full shadow-md bg-primary animate-bounce-slow hover:animate-none"
            >
              <a href="#tentangKami">
                <i class="fa-solid fa-arrow-down"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
