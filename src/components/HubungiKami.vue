<script setup>
import Title from './Title.vue';
import { ref, onUnmounted } from 'vue';

const section = ref(null);
const emit = defineEmits(['setActiveSection']);

const handleScroll = () => {
  if (
    section.value &&
    section.value.getBoundingClientRect().top < window.innerHeight / 2
  ) {
    emit('setActiveSection', 'contactUs');
  }
};

window.addEventListener('scroll', handleScroll);

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section
    id="contactUs"
    ref="section"
    class="pt-10 pb-12 border-b-2 bg-primary md:pt-12 md:pb-14 lg:pt-14 lg:pb-16"
  >
    <div class="container grid grid-cols-1 gap-2">
      <Title :title="'Hubungi Kami'" />
    </div>
    <div
      class="container grid gap-8 mt-2 lg:grid-cols-2 lg:place-items-center lg:mt-6"
    >
      <div class="mt-6 space-y-4 lg:mt-8">
        <div class="flex items-start gap-4 md:text-lg">
          <i class="text-2xl fa-solid fa-phone"></i>
          <span class="font-semibold"
            ><a
              href="whatsapp://send?text=Hello&phone=+6285222271978"
              target="_blank"
              >+62 852-2227-1978</a
            ></span
          >
        </div>
        <div class="flex items-start gap-4 md:text-lg">
          <i class="text-2xl fa-solid fa-envelope"></i>
          <span class="font-semibold">betonciptalabuan@gmail.com</span>
        </div>
        <div class="flex items-start gap-4 md:text-lg">
          <i class="text-2xl fa-solid fa-location-dot"></i>
          <span class="font-semibold"
            >Jl. Raya Labuan Pandeglang KM.01, Kp. Sindangresmi, RT. 03/ RW. 01,
            Desa Sindang Laya, Kec. Pagelaran, Kab. Pandeglang, Banten
            42273.</span
          >
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930.106430456673!2d105.85047946391116!3d-6.387134412032064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4233c12907965b%3A0xa54fbe2eb986eb9d!2sSindanglaya%2C%20Pagelaran%2C%20Pandeglang%20Regency%2C%20Banten!5e0!3m2!1sen!2sid!4v1763003733071!5m2!1sen!2sid"
          class="rounded-xl lg:w-[600px] w-full h-[350px] lg:h-[450px]"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>
