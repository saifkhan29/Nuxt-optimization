<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <pre>{{ reqObject }}</pre> <!-- Display the req object -->
    <p><strong>User Agent:</strong> {{ userAgent }}</p> <!-- Display User Agent -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Define reactive variables
const pageTitle = 'This is the about page 2';
const reqObject = ref(null);
const userAgent = ref('');

// Fetch request data from the server API
const { data, error } = await useFetch('/api/user-agent');

// Handle errors
if (error.value) {
  console.error('Error fetching request data:', error.value);
} else {
  reqObject.value = data.value;  // Assign data to reqObject
}

// Get user agent from the browser
onMounted(() => {
  userAgent.value = navigator.userAgent; // Set the user agent string
});
</script>
