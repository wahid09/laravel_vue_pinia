<script setup>
import Navbar from "../components/nav.vue"
</script>
<template>
  <Navbar />
  <div class="container is-max-desktop px-2 py-4">
    <router-view />
  </div>
</template>
<style>
@import 'bulma/css/bulma.min.css'
</style>