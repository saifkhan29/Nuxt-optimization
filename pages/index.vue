<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <p>{{ reqObject }}</p> <!-- Display the req object -->
  </div>
</template>

<script setup>
const { data: reqObject, error } = await useFetch('/api/user-agent');
const pageTitle = 'This is the main page 2';

if (error.value) {
  console.error('Error fetching request data:', error.value);
}
</script>

<style>
p {
    font-size: 60px;
    text-wrap: wrap;
}
</style>
