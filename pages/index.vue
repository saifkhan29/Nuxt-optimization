<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <p>User Agent: {{ userAgent }}</p>
    <p>Is Bot: {{ isBot ? 'Yes 🤖' : 'No 🙅‍♂️' }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const pageTitle = 'This is the main page 2';

const bots = [
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
];

const { data: reqObject, error } = await useFetch('/api/user-agent');

if (error.value) {
  console.error('Error fetching request data:', error.value);
}

const userAgent = ref(reqObject.value?.userAgent || '');

const isBot = computed(() => {
  const ua = userAgent.value.toLowerCase();
  return bots.some(bot => ua.includes(bot));
});
</script>

<style>
p {
  font-size: 20px;
  word-wrap: break-word;
}
</style>
