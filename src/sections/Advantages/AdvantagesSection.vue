<script setup>
import SectionHeading from '../../components/SectionHeading.vue';
import advantages from '../../data/advantages.json';

const icons = {
  grid: 'fa-solid fa-border-all',
  shield: 'fa-solid fa-shield-halved',
  truck: 'fa-solid fa-truck-fast',
  chat: 'fa-solid fa-comments'
};
</script>

<template>
  <section id="advantages" class="bg-white py-24">
    <div class="container">
      <SectionHeading
        eyebrow="Keunggulan"
        title="Detail kecil yang membuat pekerjaan lapangan terasa lebih ringan."
        description="Kami menempatkan produk, jadwal, dan komunikasi sebagai satu alur kerja, bukan bagian yang berdiri sendiri."
      />

      <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(item, index) in advantages"
          :key="item.title"
          class="group border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl hover:shadow-red-950/10"
          data-aos="fade-up"
          :data-aos-delay="index * 90"
        >
          <div class="grid h-14 w-14 place-items-center bg-black text-xl text-white transition group-hover:bg-red-600">
            <i :class="icons[item.icon]"></i>
          </div>
          <h3 class="mt-8 text-xl font-black text-ink">{{ item.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-slate-600">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
