<script setup>
import site from '../../data/site.json';
</script>

<template>
  <section id="contact" class="bg-black pb-12 pt-20 text-white md:py-24">
    <div class="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div data-aos="fade-right">
        <p class="text-sm font-black uppercase tracking-[0.28em] text-red-500">
          Kontak
        </p>
        <h2 class="mt-4 text-4xl font-black leading-tight md:text-6xl">
          Ceritakan area yang ingin kamu rapikan.
        </h2>
        <p class="mt-6 text-lg leading-8 text-white/65">
          Kirim ukuran lokasi, fungsi area, dan preferensi warna atau pola. Kami bantu arahkan pilihan paving, estimasi kebutuhan material, dan opsi pemasangan yang paling masuk akal untuk proyekmu.
        </p>
      </div>

      <div class="bg-white p-6 text-ink shadow-2xl md:p-8" data-aos="fade-left">
        <div class="grid gap-4 sm:grid-cols-2">
          <a
            :href="`https://wa.me/${site.contact.whatsapp}`"
            target="_blank"
            class="bg-red-600 p-6 text-white transition hover:bg-red-700"
          >
            <i class="fa-brands fa-whatsapp text-2xl"></i>
            <p class="mt-5 text-sm font-bold uppercase tracking-widest opacity-80">WhatsApp</p>
            <p class="mt-1 text-xl font-black">{{ site.contact.phone }}</p>
          </a>
          <a
            :href="`mailto:${site.contact.email}`"
            class="bg-slate-100 p-6 transition hover:bg-slate-200"
          >
            <i class="fa-solid fa-envelope text-2xl text-red-600"></i>
            <p class="mt-5 text-sm font-bold uppercase tracking-widest text-slate-500">Email</p>
            <p class="mt-1 break-words text-xl font-black">{{ site.contact.email }}</p>
          </a>
        </div>

        <div class="mt-5 grid gap-4">
          <div class="border border-slate-200 p-6">
            <p class="text-sm font-bold uppercase tracking-widest text-slate-500">Alamat</p>
            <p class="mt-2 text-lg font-black">{{ site.contact.address }}</p>
          </div>
          <div class="overflow-hidden border border-slate-200">
            <iframe
              :src="site.contact.mapEmbedUrl"
              title="Lokasi Paving Berkah Indonesia"
              class="h-72 w-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
