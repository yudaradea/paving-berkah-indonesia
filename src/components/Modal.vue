<script setup>
const props = defineProps({
  isOpen: Boolean,
  modalData: Object,
});

const emit = defineEmits(['closeModal']);

function getImageUrl(img) {
  return new URL(`../assets/images/${img}`, import.meta.url).href;
}
</script>

<template>
  <transition
    v-show="isOpen"
    enter-active-class="duration-500 ease-out"
    enter-from-class="transform scale-0 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="duration-300 ease-in"
    leave-from-class="opacity-100 "
    leave-to-class="transform opacity-0"
  >
    <div
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full px-2 overflow-y-auto bg-black/60"
    >
      <div
        class="w-full max-h-[90%] md:w-[650px] lg:w-[600px] bg-white rounded-xl relative overflow-y-auto"
      >
        <img
          :src="getImageUrl(modalData.img)"
          alt="Gambar {{ modalData.title }}"
          class="object-cover w-full rounded-t-xl h-[350px] md:h-[450px]"
        />
        <h1 class="px-3 mt-4 text-xl font-bold">{{ modalData.title }}</h1>
        <p class="px-3 pt-2 pb-6 text-sm text-justify">
          {{ modalData.desc }}
        </p>

        <!-- Close Button -->
        <button @click="emit('closeModal')">
          <i
            class="absolute px-0.5 text-4xl bg-white rounded-full top-1 right-1 fa-regular fa-circle-xmark text-primary"
          ></i>
        </button>
      </div>
    </div>
  </transition>
</template>
