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
export default {
  data() {
    return {
      pageTitle: 'This is the main page 2',
      userAgent: '',
      bots: [
        "googlebot",
        "yahoo! slurp",
        "bingbot",
        "yandex",
        "baiduspider",
        "facebookexternalhit",
        "twitterbot",
        "rogerbot",
        "linkedinbot",
        "embedly",
        "quora link preview",
        "showyoubot",
        "outbrain",
        "pinterest/0.",
        "developers.google.com/+/web/snippet",
        "slackbot",
        "vkshare",
        "w3c_validator",
        "redditbot",
        "applebot",
        "whatsapp",
        "flipboard",
        "tumblr",
        "bitlybot",
        "skypeuripreview",
        "nuzzel",
        "discordbot",
        "google page speed",
        "qwantify",
        "pinterestbot",
        "bitrix link preview",
        "xing-contenttabreceiver",
        "chrome-lighthouse",
        "telegrambot",
        "integration-test",
        "google-inspectiontool"
      ],
      userImages: [
        '/images/bmw-1.jpg'
      ],
      botImages: [
        '/images/mercedes-1.jpg'
      ],
      error: null
    }
  },
  computed: {
    isBot() {
      if (!this.userAgent) return false
      const ua = this.userAgent.toLowerCase()
      return this.bots.some(bot => ua.includes(bot))
    },
    displayImages() {
      return this.isBot ? this.botImages : this.userImages
    }
  },
  mounted() {
    this.$fetchUserAgent()
  },
  methods: {
    async $fetchUserAgent() {
      try {
        const response = await fetch('/api/user-agent')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        this.userAgent = data.userAgent || ''
      } catch (e) {
        this.error = e
        console.error('Fetch failed:', e)
      }
    }
  }
}
</script>

<style scoped>
.car-images img {
  max-width: 300px;
  margin: 10px;
}
</style>
