<script setup>
import SectionHeading from '../../components/SectionHeading.vue';
import projects from '../../data/projects.json';
import { imageUrl } from '../../utils/image';
</script>

<template>
  <section id="projects" class="py-24 bg-white">
    <div class="container">
      <SectionHeading
        eyebrow="Proyek"
        title="Referensi tampilan untuk kebutuhan hunian, komersial, dan industri."
        description="Paving Berkah Indonesia telah menyelesaikan berbagai proyek pemasangan paving block di berbagai segmen industri mulai dari Commercial Area, Ruang Publik (Public Space), Stasiun Pengisian BBM (Gas Station), Sekolah (School), Instansi Pemerintah (Government), Hunian (Residential), Retail, Pergudangan (Warehouse), dan Pelabuhan (Port)."
      />

      <div class="grid gap-5 mt-14 lg:grid-cols-3">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="group relative min-h-[430px] overflow-hidden bg-black"
          data-aos="zoom-in"
          :data-aos-delay="index * 100"
        >
          <img
            :src="imageUrl(project.img)"
            :alt="project.title"
            class="absolute inset-0 object-cover w-full h-full transition duration-700 opacity-70 group-hover:scale-110 group-hover:opacity-55"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"
          ></div>
          <div class="absolute bottom-0 left-0 right-0 text-white p-7">
            <p
              class="text-sm font-black uppercase tracking-[0.22em] text-red-300"
            >
              {{ project.location }}
            </p>
            <h3 class="mt-3 text-2xl font-black">{{ project.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-white/70">
              {{ project.desc }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
