<script setup>
import { useDataStore } from '../stores/getData.js'
const store = useDataStore()
import photoNoImage from '@/assets/images/photo_no.jpeg';
</script>
<template>
    <div class="col-12 resultContent text-center" v-if="store.searchResult.length == 0">
        <h1>無更多內容</h1>
    </div>
    <div class="col-12 resultContent" v-else>
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
.page-item{
    cursor: pointer;
}
</style>