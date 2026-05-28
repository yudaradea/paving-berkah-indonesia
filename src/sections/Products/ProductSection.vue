<script setup>
import SectionHeading from '../../components/SectionHeading.vue';
import products from '../../data/product.json';
import { imageUrl } from '../../utils/image';
</script>

<template>
  <section id="products" class="py-24 text-white bg-neutral-950">
    <div class="container">
      <div class="">
        <SectionHeading
          eyebrow="Produk"
          title="Koleksi paving block berkualitas untuk semua kebutuhan proyek."
          description="Paving Berkah Indonesia menjual paving block berkualitas, kami menawarkan berbagai jenis paving block terbaik seperti Tru Pave, Cobblestone, Kubus, Hexagon, Uni Pave, dan lainnya."
          light
        />
        <!-- <a
          href="#contact"
          class="inline-flex items-center self-start gap-3 px-6 py-4 font-black transition border border-white/15 hover:bg-white hover:text-black lg:self-end"
          data-aos="fade-left"
        >
          Request katalog
          <i class="fa-solid fa-file-arrow-down"></i>
        </a> -->
      </div>

      <div class="grid gap-5 mt-14 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="(product, index) in products"
          :key="product.id"
          class="overflow-hidden bg-white group text-ink"
          data-aos="fade-up"
          :data-aos-delay="index * 70"
        >
          <div class="relative h-64 overflow-hidden bg-slate-200">
            <img
              :src="imageUrl(product.img)"
              :alt="product.title"
              class="object-cover w-full h-full transition duration-700 group-hover:scale-110"
            />
            <span
              class="absolute px-3 py-2 text-xs font-black tracking-widest text-white uppercase bg-red-600 left-4 top-4"
            >
              {{ product.category }}
            </span>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-black">{{ product.title }}</h3>
            <p class="mt-3 min-h-[84px] text-sm leading-7 text-slate-600">
              {{ product.desc }}
            </p>
            <div class="flex flex-wrap gap-2 mt-5">
              <span
                v-for="spec in product.specs"
                :key="spec"
                class="px-3 py-2 text-xs font-bold bg-slate-100 text-slate-700"
              >
                {{ spec }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
