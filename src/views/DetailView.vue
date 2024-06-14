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
    <div class="row detailContent">
        <div class="col-12 text-center">
            <h1> {{ itemCategory }}</h1>
        </div>
        <div class="row d-flex justify-content-center g-2">
            <div class="col-5">
                <img 
                :src="detailInfo.Picture.PictureUrl1" 
                :alt="detailInfo.Picture.PictureDescription1" 
                class="img-fluid img-thumbnail"
            >
            </div>
            <div class="col-5">
                {{ detailInfo.DescriptionDetail }}
            </div>
        </div>

    </div>
</template>
<style lang="scss">
    .detailContent{
        padding-top: 130px;
    }
</style>
