<script setup>
import { useDataStore } from '../stores/getData.js'
const store = useDataStore()
</script>

<template>
    <div class="col-6 d-flex justify-content-center flex-column">
        <div class="col-12 pb-2">
            <input type="text" name="" id="" class="form-control" placeholder="關鍵字搜尋" v-model="store.keyWord">
        </div>
        <div class="col-12 d-flex pb-2">
            <select name="" id="" class="form-select me-2" v-model="store.searchCity">
                <option :value="city.engName" v-for="(city, i) in store.cityData" :key="i">{{ city.Name }}</option>
            </select>
            <select name="" id="" class="form-select" v-model="store.searchCategory">
                <option :value="item.engCategory" v-for="(item, i) in store.categoryData" :key="i">{{ item.Category }}</option>
            </select>
        </div>
        <button @click="store.search()" class="searchBtn">搜尋</button>
    </div>
</template>

<style lang="scss">
    .searchBtn{
        background-color: rgb(155, 155, 155);
        color: white;
        font-size: 1.2rem;
        border: none;
        padding: 5px;
        border-radius: 8px;
    }
</style>
