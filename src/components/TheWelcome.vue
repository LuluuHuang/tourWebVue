<script setup>
import { useDataStore } from '../stores/getData.js'
const store = useDataStore()
</script>

<template>
  <button @click="store.getData()">取得</button>
  <ul v-for="(item, i) in store.searchData" :key="i">
    <li>
      {{ item.ScenicSpotName }}
    </li>
  </ul>
</template>
