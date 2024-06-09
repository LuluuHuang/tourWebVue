<script setup>
import SearchData from '@/components/SearchData.vue';
import MoreData from '@/components/MoreData.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 banner d-flex justify-content-center">
        <SearchData></SearchData>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <MoreData></MoreData>
    </div>
  </div>
</template>

<style lang="scss">
  .banner{
    height: 80vh;
    background-image: url('@/assets/images/mountain.jpeg');
    background-size: cover;
    background-position: center;
  }
</style>
