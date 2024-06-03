<script setup>
import { useDataStore } from '../stores/getData.js'
const store = useDataStore()
</script>
<template>
    <p>詳細內容</p>
    <p>{{ store.detail }}</p>
</template>
