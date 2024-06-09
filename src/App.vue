<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterData from './components/FooterData.vue';
</script>

<template>
  <NavBar></NavBar>
  <RouterView />
  <FooterData></FooterData>
</template>