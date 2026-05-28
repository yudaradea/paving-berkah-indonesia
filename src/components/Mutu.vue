<script setup>
import { ref } from 'vue'; // 1. Import 'ref'
import SubTitle from './SubTitle.vue';

// 2. Import gambar agar path-nya diproses oleh bundler
import mutu1 from '../assets/images/mutu-1.png';
import mutu2 from '../assets/images/mutu-2.png';

// 3. State untuk modal
const isModalOpen = ref(false);
const selectedImageUrl = ref('');

// 4. Fungsi untuk membuka modal
const openModal = (imageUrl) => {
  selectedImageUrl.value = imageUrl;
  isModalOpen.value = true;
};

// 5. Fungsi untuk menutup modal
const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="container mt-10 lg:mt-14">
    <SubTitle :title="'Mutu Beton'" />
    <div class="grid gap-6 mt-6 lg:mt-8 md:grid-cols-2 place-items-center">
      <div
        class="p-2 overflow-hidden transition-transform duration-300 border-2 cursor-pointer rounded-xl border-primary hover:scale-105"
        @click="openModal(mutu1)"
      >
        <img
          :src="mutu1"
          alt="Tabel Mutu Beton 1"
          class="w-[450px] md:w-[550px] shadow-md"
        />
      </div>
      <div
        class="p-2 overflow-hidden transition-transform duration-300 border-2 cursor-pointer rounded-xl border-primary hover:scale-105"
        @click="openModal(mutu2)"
      >
        <img
          :src="mutu2"
          alt="Tabel Mutu Beton 2"
          class="w-[450px] md:w-[550px] shadow-md"
        />
      </div>
    </div>
  </div>

  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center px-3 bg-black bg-opacity-75"
    @click="closeModal"
  >
    <div class="relative p-3 bg-white rounded-lg shadow-xl" @click.stop>
      <button
        @click="closeModal"
        class="absolute z-10 p-1 text-black bg-white rounded-full -top-3 -right-3 hover:bg-gray-200"
        aria-label="Tutup modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <img
        :src="selectedImageUrl"
        alt="Tampilan Penuh Mutu Beton"
        class="object-containw-[70vw] h-[75vh] rounded-md"
      />
    </div>
  </div>
</template>
