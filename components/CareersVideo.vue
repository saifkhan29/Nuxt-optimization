<!-- components/HeroVideo.vue -->
<template>
  <video
    autoplay
    muted
    loop
    playsinline
    controls
    style="width: 100%; max-height: 400px; border-radius: 8px;"
  >
    <source src="/videos/culture.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script setup>
// Simple client-side video component
</script>

<style scoped>
video {
  object-fit: cover;
}
</style>
