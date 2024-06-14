<script setup>
import { useDataStore } from '../stores/getData.js'
const store = useDataStore()
import photoNoImage from '@/assets/images/photo_no.jpeg';
</script>
<template>
    <div class="col-12 resultContent">
        <div v-if="store.searchCategory == 'ScenicSpot'" class="row">
            <div
                v-for="(item, i) in store.searchResult"
                :key="i"
                class="col-3"
                @click="store.getDetail(i)"
            >
                {{ item.ScenicSpotName }}
                <img
                    :src="item.Picture && item.Picture.PictureUrl1 ? item.Picture.PictureUrl1 : photoNoImage"
                    :alt="item.Picture && item.Picture.PictureDescription1 ? item.Picture.PictureDescription1 : 'No description available'"
                    class="img-fluid img-thumbnail"
                />
            </div>
        </div>
        <div v-if="store.searchCategory == 'Activity'" class="row">
            <div
                v-for="(item, i) in store.searchResult"
                :key="i"
                class="col-3"
                @click="store.getDetail(i)"
            >
                {{ item.ActivityName }}
                <img
                    :src="item.Picture && item.Picture.PictureUrl1 ? item.Picture.PictureUrl1 : photoNoImage"
                    :alt="item.Picture && item.Picture.PictureDescription1 ? item.Picture.PictureDescription1 : 'No description available'"
                    class="img-fluid img-thumbnail"
                />
            </div>
        </div>
        <div v-if="store.searchCategory == 'Hotel'" class="row">
            <div
                v-for="(item, i) in store.searchResult"
                :key="i"
                class="col-3"
                @click="store.getDetail(i)"
            >
                {{ item.HotelName }}
                <img
                    :src="item.Picture && item.Picture.PictureUrl1 ? item.Picture.PictureUrl1 : photoNoImage"
                    :alt="item.Picture && item.Picture.PictureDescription1 ? item.Picture.PictureDescription1 : 'No description available'"
                    class="img-fluid img-thumbnail"
                />
            </div>
        </div>
        <div v-if="store.searchCategory == 'Restaurant'" class="row">
            <div
                v-for="(item, i) in store.searchResult"
                :key="i"
                class="col-3"
                @click="store.getDetail(i)"
            >
                {{ item.RestaurantName }}
                <img
                    :src="item.Picture && item.Picture.PictureUrl1 ? item.Picture.PictureUrl1 : photoNoImage"
                    :alt="item.Picture && item.Picture.PictureDescription1 ? item.Picture.PictureDescription1 : 'No description available'"
                    class="img-fluid img-thumbnail"
                />
            </div>
        </div>
    </div>
    <nav aria-label="Page navigation example" class="d-flex justify-content-center">
        <ul class="pagination">
            <li class="page-item" @click="store.prePage()">
                <span class="page-link">上一頁</span>
            </li>
            <li class="page-item" @click="store.nextPage()">
                <span class="page-link">下一頁</span>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss">
.resultContent{
    padding-top: 135px;
    img{
        width: 100%;
        height: 300px;
    }
}
</style>