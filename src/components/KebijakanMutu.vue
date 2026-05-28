<script setup lang="ts">
import SubTitle from './SubTitle.vue';
import Title from './Title.vue';
</script>

<template>
  <div class="container mt-10 lg:mt-14">
    <SubTitle :title="'Kebijakan Mutu'" />
    <p
      class="mt-2 text-sm leading-relaxed text-justify lg:w-[90%] lg:mx-auto lg:text-center"
    >
      <span class="font-bold">PT Beton Cipta Labuan</span> dalam mengelola dan
      mengembangkan kegiatannya sebagai perusahaan yang bergerak di bidang
      Industri Beton Siap Pakai dan Mortar, berkomitmen untuk mengutamakan
      kepuasan pelanggan melalui penerapan standar kualitas yang konsisten serta
      penggunaan material dan teknologi yang terjamin mutunya. Berikut merupakan
      komitmen PT Beton Cipta Labuan.
    </p>

    <div
      class="grid grid-cols-2 gap-4 mt-7 lg:mt-8 md:grid-cols-3 lg:grid-cols-6"
    >
      <!-- content -->
      <div
        class="flex flex-col items-center px-2 py-4 border-2 border-primary rounded-xl"
      >
        <div class="w-[60px]">
          <img src="../assets/images/safety.png" alt="" />
        </div>
        <p class="mt-3 mb-1.5 text-lg font-semibold">Safety</p>
        <p class="text-xs text-center">
          Mengutamakan kesejahteraan sumber daya manusia dengan menciptakan
          lingkungan kerja yang aman, sehat, dan berkeselamatan.
        </p>
      </div>

      <div
        class="flex flex-col items-center px-2 py-4 border-2 border-primary rounded-xl"
      >
        <div class="w-[60px]">
          <img src="../assets/images/inovasi.png" alt="" />
        </div>
        <p class="mt-3 mb-1.5 text-lg font-semibold">Innovation</p>
        <p class="text-xs text-center">
          Terus berinovasi untuk mengembangkan produk dan sistem
        </p>
      </div>

      <div
        class="flex flex-col items-center px-2 py-4 border-2 border-primary rounded-xl"
      >
        <div class="w-[60px]">
          <img src="../assets/images/profesional.png" alt="" />
        </div>
        <p class="mt-3 mb-1.5 text-lg font-semibold">Professionalism</p>
        <p class="text-xs text-center">
          Menjaga profesionalitas dengan memberikan pelayanan terbaik kepada
          pelanggan serta mematuhi standar teknis dan peraturan pemerintah yang
          berlaku.
        </p>
      </div>

      <div
        class="flex flex-col items-center px-2 py-4 border-2 border-primary rounded-xl"
      >
        <div class="w-[60px]">
          <img src="../assets/images/synergi.png" alt="" />
        </div>
        <p class="mt-3 mb-1.5 text-lg font-semibold">Synergistic</p>
        <p class="text-xs text-center">
          Membangun kerjasama tim yang sinergis, solid, dan berorientasi pada
          kualitas
        </p>
      </div>

      <div
        class="flex flex-col items-center px-2 py-4 border-2 border-primary rounded-xl"
      >
        <div class="w-[60px]">
          <img src="../assets/images/capable.png" alt="" />
        </div>
        <p class="mt-3 mb-1.5 text-lg font-semibold">Sustainable</p>
        <p class="text-xs text-center">
          Melakukan pengembangan usaha secara berkelanjutan dengan perencanaan
          yang terarah dan peningkatan kapasitas operasional.
        </p>
      </div>

      <div
        class="flex flex-col items-center px-2 py-4 border-2 border-primary rounded-xl"
      >
        <div class="w-[60px]">
          <img src="../assets/images/relateble.png" alt="" />
        </div>
        <p class="mt-3 mb-1.5 text-lg font-semibold">Fair Value</p>
        <p class="text-xs text-center">
          Menawarkan harga yang wajar dan kompetitif
        </p>
      </div>
    </div>
  </div>
</template>
