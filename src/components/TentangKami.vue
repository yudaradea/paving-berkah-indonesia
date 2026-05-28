<script setup>
import { ref, onUnmounted } from 'vue';
import Title from './Title.vue';
import VisiMisi from './VisiMisi.vue';

const section = ref(null);
const emit = defineEmits(['setActiveSection']);

const handleScroll = () => {
  if (
    section.value &&
    section.value.getBoundingClientRect().top < window.innerHeight / 2
  ) {
    emit('setActiveSection', 'tentangKami');
  }
};

window.addEventListener('scroll', handleScroll);

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section
    id="tentangKami"
    ref="section"
    class="py-12 bg-gray-100 md:py-14 lg:py-16"
  >
    <Title :title="'Tentang Kami'" />
    <div
      class="container grid items-center gap-6 pt-8 lg:grid-cols-2 md:pt-10 lg:pt-14"
    >
      <div class="order-2 pt-2 lg:order-1 lg:pt-0">
        <h1 class="font-bold uppercase md:text-2xl">Company History</h1>
        <p
          class="py-2 text-sm leading-relaxed text-justify md:text-base md:leading-relaxed"
        >
          <span class="font-bold">PT BETON CIPTA LABUAN</span> berdiri sebagai
          bagian dari penguatan rantai pasok dan layanan konstruksi yang telah
          dijalankan oleh dua perusahaan sebelumnya, yaitu
          <span class="font-bold uppercase">PT Alin Catur Amaranggana</span>
          yang bergerak dalam bidang general contractor, serta
          <span class="font-bold uppercase">PT Sumber Pilar Indonesia</span>
          yang berfokus sebagai supplier material beton dan konstruksi.
          Kombinasi pengalaman kedua perusahaan tersebut menjadi fondasi utama
          lahirnya PT BETON CIPTA LABUAN sebagai penyedia beton siap pakai
          <span class="italic">Ready Mix Concrete</span> dan mortar dengan
          standar kualitas tinggi.
        </p>
        <p
          class="text-sm leading-relaxed text-justify md:text-base md:leading-relaxed"
        >
          Seiring meningkatnya kebutuhan beton berkualitas dalam pembangunan
          infrastruktur dan konstruksi di wilayah Banten dan sekitarnya,
          <span class="font-bold">PT BETON CIPTA LABUAN</span> didirikan untuk
          menghadirkan solusi yang terintegrasi—mulai dari penyediaan bahan
          baku, proses produksi beton melalui sistem batching plant, hingga
          pengiriman ke lokasi proyek. Pendekatan ini memungkinkan kami
          memberikan layanan yang lebih efisien, tepat waktu, dan sesuai
          spesifikasi teknis lapangan.
        </p>

        <div class="pt-6">
          <div class="h-2 bg-primary rounded-t-xl"></div>
          <div
            class="flex flex-col items-center px-[12px] py-4 pb-6 bg-primary/40 rounded-b-xl shadow-sm"
          >
            <div class="w-full italic">
              <p class="text-[13px] leading-relaxed text-justify">
                Dalam pengembangan usaha di bidang Industri Beton Siap Pakai,
                <span class="font-bold">PT Beton Cipta Labuan</span> memahami
                bahwa keberhasilan proyek konstruksi tidak hanya ditentukan oleh
                kualitas produk, tetapi juga oleh kemitraan dan sinergi dengan
                berbagai pemangku kepentingan. Oleh karena itu, kami senantiasa
                membangun hubungan kerja yang kuat dan saling menguntungkan
                dengan sektor Swasta maupun Pemerintah.
              </p>
              <p class="text-[13px] leading-relaxed text-justify pt-2">
                Melalui kolaborasi yang harmonis,
                <span class="font-bold">PT Beton Cipta Labuan</span> mampu
                menyediakan dukungan material dan layanan teknis yang sesuai
                dengan kebutuhan proyek, baik dalam skala pembangunan komersial,
                pemukiman, fasilitas industri, hingga proyek infrastruktur
                publik.
              </p>
              <div class="text-[13px] leading-relaxed text-justify pt-2">
                <span class="not-italic"
                  >Komitmen ini kami wujudkan melalui:</span
                >
                <ul
                  class="pt-1 list-disc list-inside text-[13px] leading-relaxed text-justify"
                >
                  <li>
                    Transparansi dan profesionalitas dalam setiap proses kerja
                  </li>
                  <li>Pelayanan yang responsif dan terkoordinasi</li>
                  <li>Kualitas beton yang konsisten dan terjamin</li>
                  <li>
                    Kesiapan mendukung proyek dalam berbagai kondisi lapangan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-tr-[36px] rounded-bl-[36px] lg:w-5/6 lg:justify-self-end order-1 lg:order-2 pt-2 lg:pt-0"
      >
        <img
          src="../assets/images/tentangKami.jpg"
          alt=""
          class="object-cover w-full h-full transition-all duration-500 hover:scale-105 rounded-tr-[36px] rounded-bl-[36px]"
        />
      </div>
    </div>

    <VisiMisi />
  </section>
</template>
