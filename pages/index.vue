<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <p>User Agent: {{ userAgent }}</p>
    <p>Is Bot: {{ isBot ? 'Yes 🤖' : 'No 🙅‍♂️' }}</p>
  </div>
</template>

<script>
import { isBot } from '~/utils/botDetect'

export default {
  data() {
    return {
      pageTitle: 'Check Bot Detection',
      userAgent: '',
      isBot: false
    }
  },
  mounted() {
    // For client-side example, use browser user agent
    this.userAgent = navigator.userAgent || ''
    this.isBot = isBot(this.userAgent)
  }
}
</script>

<style>
p {
  font-size: 20px;
  word-wrap: break-word;
}
</style>
