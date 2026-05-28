<script setup>
import { ref, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import Title from './Title.vue';
import dokumentasis from '../data/dokumentasi.json';
function getImageUrl(img) {
  return new URL(`../assets/images/${img}`, import.meta.url).href;
}

const section = ref(null);
const emit = defineEmits(['setActiveSection']);

const handleScroll = () => {
  if (
    section.value &&
    section.value.getBoundingClientRect().top < window.innerHeight / 2
  ) {
    emit('setActiveSection', 'dokumentasi');
  }
};

window.addEventListener('scroll', handleScroll);

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section
    id="dokumentasi"
    ref="section"
    class="pt-10 pb-12 bg-white md:pt-12 md:pb-14 lg:pt-14 lg:pb-16"
  >
    <div class="container grid grid-cols-1 gap-4">
      <Title :title="'Dokumentasi'" />
      <h1 class="text-sm text-justify lg:w-3/4 lg:mx-auto lg:text-center">
        Kesempatan untuk mendapatkan saran ahli dalam hal material bangunan,
        perencanaan, pembangunan, dan renovasi bangunan. Selama konsultasi,
        seorang kontraktor yang terlatih dan berpengalaman akan membantu anda
        untuk memahami masalah yang terkait dengan proyek bangunan dan
        memberikan solusi yang efektif untuk mengatasi masalah anda.
      </h1>
    </div>
    <swiper
      :slides-per-view="1.5"
      :centered-slides="true"
      :space-between="10"
      :loop="true"
      :modules="[Autoplay]"
      :speed="3000"
      :autoplay="{ delay: 1500, disableOnInteraction: false }"
      :breakpoints="{
        1024: {
          slidesPerView: 3.5,
        },
        600: {
          slidesPerView: 2.5,
        },
      }"
      class="mt-8 md:mt-10"
    >
      <swiper-slide
        v-for="dokumentasi in dokumentasis"
        :key="dokumentasi.id"
        class="px-1 border-2 rounded-lg border-primary"
      >
        <div class="flex items-center justify-center">
          <img
            :src="getImageUrl(dokumentasi.img)"
            alt=""
            class="w-full h-[350px] md:h-[550px] lg:h-[450px] xl:h-[480px] 2xl:h-[550px] object-cover"
          />
        </div>
      </swiper-slide>
    </swiper>
    <div class="flex justify-center mt-6 lg:mt-8">
      <a
        href="whatsapp://send?text=Hello&phone=+6285222271978"
        target="_blank"
        class="px-4 py-1.5 shadow-md border border-primary rounded-md bg-primary hover:bg-transparent hover:shadow-md transition-all duration-300 font-medium"
        ><i class="fa-solid fa-phone mr-1 pt-[2px]"></i> Hubungi Kami
      </a>
    </div>
  </section>
</template>
