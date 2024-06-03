<script setup>
import { useDataStore } from '../stores/getData.js'
const store = useDataStore()
</script>
<template>
    <div class="col-12">
        <div v-if="store.searchCategory == 'ScenicSpot'" class="row">
            <div
                v-for="(item, i) in store.searchResult"
                :key="i"
                class="col-3"
                @click="store.getDetail(i)"
            >
                {{ item.ScenicSpotName }}
                <img
                    :src="item.Picture.PictureUrl1"
                    :alt="item.Picture.PictureDescription1"
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
                    :src="item.Picture.PictureUrl1"
                    :alt="item.Picture.PictureDescription1"
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
                    :src="item.Picture.PictureUrl1"
                    :alt="item.Picture.PictureDescription1"
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
                    :src="item.Picture.PictureUrl1"
                    :alt="item.Picture.PictureDescription1"
                    class="img-fluid img-thumbnail"
                />
            </div>
        </div>
    </div>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
                <span class="page-link">Previous</span>
            </li>
            <li class="page-item">
                <span class="page-link">1</span>
            </li>
            <li class="page-item">
                <span class="page-link">2</span>
            </li>
            <li class="page-item">
                <span class="page-link">3</span>
            </li>
            <li class="page-item" @click="store.nextPage()">
                <span class="page-link">nextpage</span>
            </li>
        </ul>
    </nav>
</template>
