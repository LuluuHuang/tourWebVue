<script setup>
import { computed } from 'vue';
import { useDataStore } from '../stores/getData.js'
const store = useDataStore();
const detailInfo = store.detail;

//判斷搜尋種類
const itemCategory = computed(() => {
    const item = store.searchCategory;
    return detailInfo[`${item}Name`];
});

</script>
<template>
    <p>詳細內容</p>
    <div class="row">
        <div class="col-12">
            <h1> {{ itemCategory }}</h1>
        </div>
        <div class="col-6">
            <img 
                :src="detailInfo.Picture.PictureUrl1" 
                :alt="detailInfo.Picture.PictureDescription1" 
                class="img-fluid img-thumbnail"
            >
        </div>
        <div class="col-6">
            {{ detailInfo.DescriptionDetail }}
        </div>
    </div>
</template>
