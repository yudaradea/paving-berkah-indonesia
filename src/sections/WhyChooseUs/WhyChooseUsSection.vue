<script setup>
import SectionHeading from '../../components/SectionHeading.vue';
import reasons from '../../data/reasons.json';
</script>

<template>
  <section class="bg-neutral-950 py-24 text-white">
    <div class="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <SectionHeading
          eyebrow="Kenapa memilih kami"
          title="Lebih dari sekadar supply paving."
          description="Kami bantu kebutuhan proyek dari sisi teknis, visual, dan jadwal, sehingga keputusan material terasa lebih yakin sejak awal."
          light
        />
      </div>

      <div class="grid gap-4">
        <article
          v-for="(reason, index) in reasons"
          :key="reason.title"
          class="group grid gap-5 border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:bg-white/[0.09] md:grid-cols-[90px_1fr]"
          data-aos="fade-left"
          :data-aos-delay="index * 80"
        >
          <div class="text-5xl font-black text-red-500 transition group-hover:text-white">
            {{ reason.metric }}
          </div>
          <div>
            <h3 class="text-xl font-black">{{ reason.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-white/65">{{ reason.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
