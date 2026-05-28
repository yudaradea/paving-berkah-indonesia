<script setup>
import site from '../../data/site.json';
import { imageUrl } from '../../utils/image';

const heroImage = imageUrl('hero.png');
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[720px] overflow-hidden bg-black text-white md:min-h-[760px] lg:min-h-[820px]"
  >
    <img
      :src="heroImage"
      alt="Produksi paving block"
      class="absolute inset-0 object-cover w-full h-full opacity-55"
    />
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.42),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.48),rgba(0,0,0,0.72))]"
    ></div>
    <div
      class="absolute -bottom-24 right-8 hidden h-72 w-72 rotate-12 border-[38px] border-red-600/70 lg:block"
    ></div>

    <div
      class="container relative z-10 flex min-h-[720px] items-center pb-20 pt-32 md:min-h-[760px] lg:min-h-[820px]"
    >
      <div class="max-w-4xl">
        <p
          class="mb-5 inline-flex max-w-full flex-wrap items-center gap-3 border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] backdrop-blur sm:text-xs sm:tracking-[0.28em]"
          data-aos="fade-right"
        >
          <span class="w-2 h-2 bg-red-500"></span>
          Produsen dan pemasangan paving
        </p>
        <h1
          class="text-[35px] font-black leading-none sm:text-5xl md:text-7xl lg:text-8xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span>Paving </span
          ><span><span class="text-red-500">Ber</span>kah Indonesia</span>
        </h1>
        <p
          class="max-w-2xl text-[15px] leading-8 mt-7 text-white/72 md:text-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {{ site.description }}
        </p>
        <div
          class="flex flex-col gap-4 mt-10 sm:flex-row"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="#products"
            class="inline-flex w-full items-center justify-center gap-3 py-4 font-black text-white transition bg-red-600 shadow-2xl px-7 shadow-red-950/30 hover:-translate-y-1 hover:bg-red-700 sm:w-auto"
          >
            Lihat Produk
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a
            :href="`https://wa.me/${site.contact.whatsapp}`"
            target="_blank"
            class="inline-flex w-full items-center justify-center gap-3 py-4 font-black text-white transition border border-white/20 bg-white/10 px-7 backdrop-blur hover:-translate-y-1 hover:bg-white hover:text-black sm:w-auto"
          >
            <i class="fa-brands fa-whatsapp"></i>
            Minta Penawaran
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
