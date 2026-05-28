<script setup>
import SectionHeading from '../../components/SectionHeading.vue';
import process from '../../data/process.json';
</script>

<template>
  <section class="bg-slate-100 py-24">
    <div class="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionHeading
        eyebrow="Alur kerja"
        title="Dari ukuran lahan sampai paving siap diinjak."
        description="Setiap tahap dibuat sederhana agar kebutuhan proyek cepat terbaca dan keputusan pembelian tidak berputar-putar."
      />

      <div class="grid gap-4">
        <article
          v-for="(item, index) in process"
          :key="item.step"
          class="grid gap-5 bg-white p-6 shadow-sm transition hover:shadow-xl md:grid-cols-[90px_1fr]"
          data-aos="fade-left"
          :data-aos-delay="index * 80"
        >
          <p class="text-5xl font-black text-red-600">{{ item.step }}</p>
          <div>
            <h3 class="text-xl font-black text-ink">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-7 text-slate-600">{{ item.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
