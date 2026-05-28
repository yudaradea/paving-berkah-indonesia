<script setup>
import site from '../data/site.json';
</script>

<template>
  <a
    :href="`https://wa.me/${site.contact.whatsapp}`"
    target="_blank"
    aria-label="Chat WhatsApp"
    class="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-green-500 text-2xl text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:bg-green-600 md:bottom-7 md:right-7 md:h-14 md:w-14"
  >
    <i class="fa-brands fa-whatsapp"></i>
  </a>
</template>
