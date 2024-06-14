<script setup>
    import { useDataStore } from '../stores/getData.js'
    const store = useDataStore()
</script>
<template>
    <div class="col-12" v-for="(item,i) in store.categoryData.slice(1)" :key="i">
        <div class="row justify-content-end my-4">
            <div class="col-md-6 col-12 d-flex justify-content-end">
                <button type="button" class="moreBtn" @click="store.getMore(item.engCategory,0)">更多{{item.Category}}</button>
            </div>
        </div>
        <div class="row g-md-3 gy-5 gx-0">
            <div 
                class="col-md-4 col-12" 
                v-for="(more,i) in item.mores" 
                :key="i" 
            >
                <div class="moreCard">
                    <img :src="more.morePic" alt="">
                    <p>{{ more.moreName }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
$primary:#FD975E;
.moreBtn{
    border-radius: 30px;
    border: none;
    background-color: $primary;
    color: white;
    font-size: 1.5rem;
    padding: 10px;
}
.moreCard{
    border: 4px solid rgb(199, 199, 199);
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    cursor: default;
    img{
        width: 100%;
        height: 80%;
        object-fit: cover;
    }
    p{
        height: 20%;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.moreCard:hover{
    border-color: $primary;
}
</style>