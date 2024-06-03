<script setup>
import { useDataStore } from '../stores/getData.js'
const store = useDataStore()
</script>

<template>
    <div class="col-6">
        <div class="col-12 d-flex">
            <select name="" id="" class="form-select m-3" v-model="store.searchCity">
                <option :value="city.engName" v-for="(city, i) in store.cityData" :key="i">{{ city.Name }}</option>
            </select>
            <select name="" id="" class="form-select m-3" v-model="store.searchCategory">
                <option :value="item.engCategory" v-for="(item, i) in store.categoryData" :key="i">{{ item.Category }}</option>
            </select>
        </div>
        <button @click="store.getResult()" class="btn btn-primary">搜尋</button>
    </div>
</template>
