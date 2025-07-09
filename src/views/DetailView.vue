<script setup>
import { computed } from 'vue'
import { useDataStore } from '../stores/getData.js'
const store = useDataStore()
const detailInfo = store.detail
import photoNoImage from '@/assets/images/photo_no.jpeg'

//判斷搜尋種類
const itemCategory = computed(() => {
  const item = store.searchCategory
  // console.log(item);
  return detailInfo[`${item}Name`]
})
</script>
<template>
  <div class="container">
    <div class="detailContent">
      <div class="row" v-if="store.searchCategory == 'ScenicSpot'">
        <div class="col-12 text-center">
          <h1>
            {{ itemCategory }}<span class="badge bg-secondary">{{ detailInfo.Level }}</span>
          </h1>
        </div>
        <div class="row d-flex justify-content-center g-2">
          <div class="col-lg-4 col-12">
            <img
              :src="detailInfo.Picture.PictureUrl1 ? detailInfo.Picture.PictureUrl1 : photoNoImage"
              :alt="detailInfo.Picture.PictureDescription1"
              class="col-12 mb-3"
            />
            <div class="col-12 otherInfo">
              <h4>相關資訊</h4>
              <p>地址：{{ detailInfo.Address }}</p>
              <p>電話：{{ detailInfo.Phone }}</p>
              <p>營業時間：{{ detailInfo.OpenTime }}</p>
            </div>
          </div>
          <div class="col-lg-6 col-12 description">
            {{ detailInfo.DescriptionDetail }}
          </div>
        </div>
      </div>
      <div class="row" v-else-if="store.searchCategory == 'Hotel'">
        <div class="col-12 text-center">
          <h1>{{ itemCategory }}</h1>
        </div>
        <div class="row d-flex justify-content-center g-2">
          <div class="col-lg-4 col-12">
            <img
              :src="detailInfo.Picture.PictureUrl1 ? detailInfo.Picture.PictureUrl1 : photoNoImage"
              :alt="detailInfo.Picture.PictureDescription1"
              class="col-12 mb-3"
            />
            <div class="col-12 otherInfo">
              <h4>相關資訊</h4>
              <p>地址：{{ detailInfo.Address }}</p>
              <p>電話：{{ detailInfo.Phone }}</p>
              <p>停車資訊：{{ detailInfo.ParkingInfo }}</p>
            </div>
          </div>
          <div class="col-lg-6 col-12 description">
            {{ detailInfo.Description }}
          </div>
        </div>
      </div>
      <div class="row" v-else-if="store.searchCategory == 'Activity'">
        <div class="col-12 text-center">
          <h1>{{ itemCategory }}</h1>
        </div>
        <div class="row d-flex justify-content-center g-2">
          <div class="col-lg-4 col-12">
            <img
              :src="detailInfo.Picture.PictureUrl1 ? detailInfo.Picture.PictureUrl1 : photoNoImage"
              :alt="detailInfo.Picture.PictureDescription1"
              class="col-12 mb-3"
            />
            <div class="col-12 otherInfo">
              <h4>相關資訊</h4>
              <p>地址：{{ detailInfo.Address }}</p>
              <p>電話：{{ detailInfo.Phone }}</p>
              <p>舉辦單位：{{ detailInfo.Organizer }}</p>
            </div>
          </div>
          <div class="col-lg-6 col-12 description">
            {{ detailInfo.Description }}
          </div>
        </div>
      </div>
      <div class="row" v-else-if="store.searchCategory == 'Restaurant'">
        <div class="col-12 text-center">
          <h1>{{ itemCategory }}</h1>
        </div>
        <div class="row d-flex justify-content-center g-2">
          <div class="col-lg-4 col-12">
            <img
              :src="detailInfo.Picture.PictureUrl1 ? detailInfo.Picture.PictureUrl1 : photoNoImage"
              :alt="detailInfo.Picture.PictureDescription1"
              class="col-12 mb-3"
            />
            <div class="col-12 otherInfo">
              <h4>相關資訊</h4>
              <p>地址：{{ detailInfo.Address }}</p>
              <p>電話：{{ detailInfo.Phone }}</p>
              <p>營業時間：{{ detailInfo.OpenTime }}</p>
            </div>
          </div>
          <div class="col-lg-6 col-12 description">
            {{ detailInfo.Description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.detailContent {
  padding-top: 20px;
  img {
    width: 100%;
  }
  .description {
    font-size: 1.2rem;
    line-height: 2;
  }
  .otherInfo {
    padding: 20px;
    border-radius: 40px 0 40px 40px;
    background-color: bisque;
    p {
      margin: 0;
    }
  }
}
</style>
