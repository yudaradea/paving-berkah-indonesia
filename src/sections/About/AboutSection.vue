<script setup>
import SectionHeading from '../../components/SectionHeading.vue';
import site from '../../data/site.json';
import { imageUrl } from '../../utils/image';
</script>

<template>
  <section id="about" class="py-24 bg-white">
    <div
      class="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
    >
      <div>
        <SectionHeading
          eyebrow="Tentang kami"
          title="Partner material paving yang tajam di kualitas, cepat di eksekusi."
          description="PT Paving Berkah Indonesia memiliki fasilitas produksi beton pracetak yang berlokasi di Mandalasari Kab Pandeglang Banten Indonesia, dengan dukungan sistem produksi modern berbasis Full Automatic Machine untuk menunjang kebutuhan proyek konstruksi secara efisien, presisi, dan tepat waktu. Lokasi pabrik yang strategis memungkinkan proses distribusi berjalan optimal untuk melayani berbagai kebutuhan proyek residential, commercial, industrial, hingga infrastruktur publik di wilayah Banten dan sekitarnya."
          description2="Didukung area produksi yang terorganisir, stock yard yang memadai, serta sistem Quality Control yang ketat, PT PBI berkomitmen menghasilkan produk beton pracetak berkualitas tinggi dengan standar produksi yang konsisten."
        />
        <a
          :href="site.companyProfile"
          download
          class="inline-flex items-center gap-3 px-6 py-4 mt-8 text-sm font-black text-white transition bg-red-600 shadow-xl shadow-red-950/15 hover:-translate-y-1 hover:bg-red-700"
          data-aos="fade-up"
        >
          <i class="fa-solid fa-file-arrow-down"></i>
          Download Company Profile
        </a>
        <div class="grid gap-4 mt-10 sm:grid-cols-2">
          <div
            class="p-6 border-l-4 border-red-600 bg-slate-50"
            data-aos="fade-up"
          >
            <p class="text-lg font-black text-ink">Fokus aplikasi</p>
            <p class="mt-3 text-sm leading-7 text-slate-600">
              Halaman rumah, carport, trotoar, area parkir, pergudangan, taman,
              sampai kawasan industri.
            </p>
          </div>
          <div
            class="p-6 border-l-4 border-black bg-slate-50"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p class="text-lg font-black text-ink">Cara kerja</p>
            <p class="mt-3 text-sm leading-7 text-slate-600">
              Konsultasi kebutuhan, estimasi volume, rekomendasi produk,
              pengiriman, dan opsi pemasangan.
            </p>
          </div>
        </div>
      </div>

      <div class="relative" data-aos="zoom-in">
        <div class="absolute bg-red-600 -left-5 -top-5 h-28 w-28"></div>
        <img
          :src="imageUrl('tentangKami.jpg')"
          alt="Tim proyek paving"
          class="relative h-[480px] w-full object-cover shadow-2xl"
        />
        <div
          class="absolute p-6 text-white bottom-6 left-6 right-6 bg-black/88 backdrop-blur"
        >
          <p class="text-3xl font-black">Rapi dari dasar.</p>
          <p class="mt-2 text-sm leading-6 text-white/65">
            Permukaan akhir yang bagus selalu dimulai dari rekomendasi material
            dan persiapan lahan yang benar.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
