<!-- pages/careers.vue -->
<template>
  <section style="max-width: 800px; margin: auto; padding: 2rem;">
    <h1>Join Our Team</h1>
    <p>Experience our culture through this video:</p>

    <!-- Placeholder shown initially -->
    <div
      v-if="!showVideo"
      @click="showVideo = true"
      style="cursor: pointer; position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);"
    >
      <img
        src="/images/bmw-1.jpg"
        alt="Play video"
        style="width: 100%; display: block;"
      />
      <button
        style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
               background: rgba(0, 0, 0, 0.6); border: none; color: white; font-size: 2rem;
               padding: 0.5rem 1rem; border-radius: 50%; cursor: pointer;"
        aria-label="Play video"
      >
        ▶️
      </button>
    </div>

    <!-- Video rendered only on client and only after user click -->
    <client-only>
      <component v-if="showVideo" :is="HeroVideoAsync" />
    </client-only>
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  data() {
    return {
      showVideo: false,
      HeroVideoAsync: null
    }
  },
  created() {
    this.HeroVideoAsync = defineAsyncComponent(() =>
      import('@/components/CareersVideo.vue')
    )
  }
}
</script>
