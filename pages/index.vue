<template>
  <div>
    <aside>
      <h1>{{ pageTitle }}</h1>
      <p>User Agent: {{ userAgent }}</p>
      <p>Is Bot: {{ isBot ? 'Yes 🤖' : 'No 🙅‍♂️' }}</p>
    </aside>

    <section>
      <h2>Welcome to the Car Gallery</h2>
      <p>
        Explore a collection of amazing cars from around the world. Whether you love
        sports cars, classic cars, or electric vehicles, there’s something here for everyone.
      </p>

      <div class="car-images">
        <img
          v-for="(img, index) in displayImages"
          :key="index"
          :src="img"
          :alt="'Car Image ' + (index + 1)"
          loading="lazy"
        />
      </div>
    </section>
  </div>
</template>

<script>
// Simple bot detection function (you can import yours)
import { isBot } from '~/utils/botDetect'

export default {
  data() {
    return {
      pageTitle: 'Check Bot Detection',
      userAgent: '',
      isBot: false,

      // Two sets of images - one for bots, one for normal users
      userImages: [
        '/images/bmw-1.jpg'
      ],
      botImages: [
        '/images/mercedes-1.jpg'
      ]
    }
  },
  computed: {
    displayImages() {
      return this.isBot ? this.botImages : this.userImages
    }
  },
  mounted() {
    // Use browser user agent for client-side
    this.userAgent = navigator.userAgent || ''
    this.isBot = isBot(this.userAgent)
  }
}
</script>
