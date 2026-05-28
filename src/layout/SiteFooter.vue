<script setup>
import site from '../data/site.json';

const startYear = 2026;
const currentYear = new Date().getFullYear();
const yearText =
  currentYear > startYear ? `${startYear} - ${currentYear}` : `${startYear}`;
</script>

<template>
  <footer class="bg-black py-6 text-white md:py-8">
    <div class="container text-center text-sm font-semibold text-white/60">
      &copy; {{ yearText }} {{ site.brand }}. All Rights Reserved.
    </div>
  </footer>
</template>
