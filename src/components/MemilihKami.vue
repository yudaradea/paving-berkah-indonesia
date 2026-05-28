<script setup>
import Title from './Title.vue';
import KebijakanMutu from './KebijakanMutu.vue';
import Partner from './Partner.vue';
import SubTitle from './SubTitle.vue';
</script>

<template>
  <section
    id="tentangKami"
    class="pt-10 pb-12 bg-white md:pt-12 md:pb-14 lg:pt-14 lg:pb-16"
  >
    <SubTitle :title="'Kenapa Memilih Kami'" />
    <p
      class="container mt-3 text-xs md:text-sm text-center lg:w-[50%] capitalize"
    >
      Keyakinan, filosofi, dan prinsip yang mendorong bisnis dan kinerja
      perusahaan kami adalah integritas, akuntabilitas, kolaborasi dan
      improvement.
    </p>

    <div
      class="container grid gap-8 mt-8 lg:mt-10 md:grid-cols-2 lg:grid-cols-4"
    >
      <div class="py-6 border-[3px] border-primary rounded-xl shadow-md">
        <div class="flex flex-col items-center">
          <div class="w-[60px]">
            <img src="../assets/images/integritas.png" alt="" />
          </div>
          <div
            class="w-full p-1 mt-6 mb-4 font-semibold text-center bg-primary"
          >
            Integritas
          </div>
          <p class="px-4 text-sm text-center">
            Konsistensi terhadap kebenaran dan menjalankan nilai-nilai etika
            yang dijunjung dalam perusahaan dan di masyarakat , berperilaku
            jujur dan menunjukkan integritas yang baik.
          </p>
        </div>
      </div>

      <div class="py-6 border-[3px] border-primary rounded-xl shadow-md">
        <div class="flex flex-col items-center">
          <div class="w-[60px]">
            <img src="../assets/images/akuntabilitas.png" alt="" />
          </div>
          <div
            class="w-full p-1 mt-6 mb-4 font-semibold text-center bg-primary"
          >
            Akuntabilitas
          </div>
          <p class="px-4 text-sm text-center">
            Membuat keputusan dan melaksanakan segala tindakan sesuai standar
            yang berlaku dan dapat dipertanggungjawabkan dalam hubungan
            perusahaan dengan konsumen, pemasok dan personel perusahaan.
          </p>
        </div>
      </div>

      <div class="py-6 border-[3px] border-primary rounded-xl shadow-md">
        <div class="flex flex-col items-center">
          <div class="w-[80px]">
            <img src="../assets/images/kolaborasi.png" alt="" />
          </div>
          <div
            class="w-full p-1 mt-[22px] mb-4 font-semibold text-center lg:mt-6 bg-primary"
          >
            Kolaborasi
          </div>
          <p class="px-4 text-sm text-center">
            Membangun dan memelihara hubungan dengan seluruh pemangku
            kepentingan berdasarkan rasa hormat, saling percaya, dan komunikasi
            yang baik dengan pemberdayaan, kolaborasi, transparansi, dan
            keadilan.
          </p>
        </div>
      </div>

      <div class="py-6 border-[3px] border-primary rounded-xl shadow-md">
        <div class="flex flex-col items-center">
          <div class="w-[60px]">
            <img src="../assets/images/improvment.png" alt="" />
          </div>
          <div
            class="w-full p-1 mt-6 mb-4 font-semibold text-center bg-primary"
          >
            Improvement
          </div>
          <p class="px-4 text-sm text-center">
            Mempersiapkan masa depan yang lebih baik melalui inovasi,
            pembelajaran berkelanjutan, dan pemikiran tangkas. Kondisi
            keselamatan akan ditingkatkan seiring perjalanan jangka panjang yang
            tidak pernah berhenti.
          </p>
        </div>
      </div>
    </div>

    <KebijakanMutu />
    <Partner />
  </section>
</template>
