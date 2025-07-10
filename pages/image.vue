<template>
  <div class="image-demo-page">
    <h1>Image Comparison: Nuxt Image vs Normal img</h1>
    <div class="images-row">
      <div class="image-block">
        <h2>Nuxt Image</h2>
        <NuxtImg src="/images/bmw-1.jpg" width="350" height="220" alt="BMW (Nuxt Image)" />
      </div>
      <div class="image-block">
        <h2>Normal img</h2>
        <img src="/images/bmw-1.jpg" width="350" height="220" alt="BMW (Normal img)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic for now
</script>

<style scoped>
.image-demo-page {
  padding: 2rem;
  font-family: 'Montserrat', Arial, sans-serif;
}
.images-row {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.image-block {
  background: #f7f7f7;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
.image-block h2 {
  margin-bottom: 1rem;
}
img, :deep(.nuxt-img) {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}
</style>
