<script setup>
// tahun
const currentYear = new Date().getFullYear();

// tahun sekarang dan nanti, misal kalo masih 2025 cukup tulis 2025, kalo 2026 tulis 2025-2026
const displayYear = currentYear === 2025 ? '2025' : `2025-${currentYear}`;
</script>

<template>
  <div class="py-6 bg-primary">
    <p class="font-bold text-center">
      Beton Cipta Labuan &copy; {{ displayYear }}. All rights reserved.
    </p>
  </div>
</template>
