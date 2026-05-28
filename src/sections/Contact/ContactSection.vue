<script setup>
import site from '../../data/site.json';
</script>

<template>
  <section id="contact" class="pt-20 pb-12 text-white bg-black md:py-24">
    <div
      class="container grid min-w-0 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
    >
      <div data-aos="fade-right">
        <p
          class="text-[13px] font-black uppercase tracking-[0.22em] text-red-500 md:text-sm md:tracking-[0.28em]"
        >
          Kontak
        </p>
        <h2 class="mt-4 text-[35px] font-black leading-tight md:text-6xl">
          Ceritakan area yang ingin kamu rapikan.
        </h2>
        <p class="mt-6 text-[17px] leading-8 text-white/65 md:text-lg">
          Kirim ukuran lokasi, fungsi area, dan preferensi warna atau pola. Kami
          bantu arahkan pilihan paving, estimasi kebutuhan material, dan opsi
          pemasangan yang paling masuk akal untuk proyekmu.
        </p>
      </div>

      <div
        class="w-full min-w-0 p-4 bg-white shadow-2xl text-ink md:p-8"
        data-aos="fade-left"
      >
        <div class="grid gap-4 sm:grid-cols-2">
          <a
            :href="`https://wa.me/${site.contact.whatsapp}`"
            target="_blank"
            class="min-w-0 p-5 text-white transition bg-red-600 hover:bg-red-700 md:p-6"
          >
            <i class="text-2xl fa-brands fa-whatsapp"></i>
            <p
              class="mt-5 text-sm font-bold tracking-widest uppercase opacity-80"
            >
              WhatsApp
            </p>
            <p class="mt-1 text-sm">{{ site.contact.phone }}</p>
          </a>
          <a
            :href="`mailto:${site.contact.email}`"
            class="min-w-0 p-5 transition bg-slate-100 hover:bg-slate-200 md:p-6"
          >
            <i class="text-2xl text-red-600 fa-solid fa-envelope"></i>
            <p
              class="mt-5 text-base font-bold tracking-widest uppercase text-slate-500"
            >
              Email
            </p>
            <p class="mt-1 text-base break-words">{{ site.contact.email }}</p>
          </a>
        </div>

        <div class="grid gap-4 mt-5">
          <div class="min-w-0 p-5 border border-slate-200 md:p-6">
            <p
              class="text-base font-bold tracking-widest uppercase text-slate-500"
            >
              Alamat
            </p>
            <p class="mt-2 text-sm">{{ site.contact.address }}</p>
          </div>
          <div class="overflow-hidden border border-slate-200">
            <iframe
              :src="site.contact.mapEmbedUrl"
              title="Lokasi Paving Berkah Indonesia"
              class="w-full border-0 h-72"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
