<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import partners from '../data/partner.json';
import SubTitle from './SubTitle.vue';
function getImageUrl(img) {
  return new URL(`../assets/images/${img}`, import.meta.url).href;
}
</script>

<template>
  <div class="mt-10">
    <SubTitle :title="'Rekanan Kami'" />
  </div>
  <p class="container mt-2 text-sm leading-relaxed text-center lg:w-1/2">
    Adapun perusahaan rekanan yang selama ini banyak berhubungan dengan
    perusahaan ini antara lain adalah sebagai berikut
  </p>
  <swiper
    :slides-per-view="3"
    :centered-slides="true"
    :space-between="10"
    :loop="true"
    :modules="[Autoplay]"
    :speed="2000"
    :autoplay="{ delay: 0, disableOnInteraction: false }"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
      },
      600: {
        slidesPerView: 3,
      },
    }"
    class="mt-6 md:mt-7"
  >
    <swiper-slide
      v-for="partner in partners"
      :key="partner.id"
      class="px-1 border-2 rounded-lg border-primary"
    >
      <div class="flex items-center justify-center">
        <img
          :src="getImageUrl(partner.img)"
          alt=""
          class="w-[200px] h-[80px] object-contain"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  overflow: hidden !important;
  -webkit-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
}
.swiper-slide {
  overflow: hidden !important;
}
</style>
