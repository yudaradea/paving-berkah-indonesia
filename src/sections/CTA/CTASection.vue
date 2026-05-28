<script setup>
import site from '../../data/site.json';
</script>

<template>
  <section class="bg-red-600 py-20 text-white">
    <div class="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
      <div data-aos="fade-right">
        <p class="text-sm font-black uppercase tracking-[0.28em] text-white/70">
          Siap mulai proyek?
        </p>
        <h2 class="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
          Kirim ukuran area kamu, kami bantu pilih paving yang paling pas.
        </h2>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row lg:justify-end" data-aos="fade-left">
        <a
          :href="`https://wa.me/${site.contact.whatsapp}`"
          target="_blank"
          class="inline-flex w-full items-center justify-center gap-3 bg-black px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-neutral-900 sm:w-auto"
        >
          <i class="fa-brands fa-whatsapp"></i>
          Chat WhatsApp
        </a>
        <a
          :href="site.companyProfile"
          download="company-profile.pdf"
          class="inline-flex w-full items-center justify-center gap-3 border border-white/35 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-black sm:w-auto"
        >
          <i class="fa-solid fa-download"></i>
          Download Compro
        </a>
      </div>
    </div>
  </section>
</template>
