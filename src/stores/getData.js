import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
export const useDataStore = defineStore('data', () => {
    const cityData = [
        {
        Name: '不分區域',
        engName: 'all'
        },
        {
        Name: '台北市',
        engName: 'Taipei'
        },
        {
        Name: '新北市',
        engName: 'NewTaipei'
        },
        {
        Name: '桃園市',
        engName: 'Taoyuan'
        },
        {
        Name: '台中市',
        engName: 'Taichung'
        },
        {
        Name: '台南市',
        engName: 'Tainan'
        },
        {
        Name: '高雄市',
        engName: 'Kaohsiung'
        },
        {
        Name: '基隆市',
        engName: 'Keelung'
        },
        {
        Name: '新竹市',
        engName: 'Hsinchu'
        },
        {
        Name: '苗栗縣',
        engName: 'MiaoliCounty'
        },
        {
        Name: '彰化縣',
        engName: 'ChanghuaCounty'
        },
        {
        Name: '南投縣',
        engName: 'NantouCounty'
        },
        {
        Name: '雲林縣',
        engName: 'YunlinCounty'
        },
        {
        Name: '嘉義縣',
        engName: 'ChiayiCounty'
        },
        {
        Name: '嘉義市',
        engName: 'Chiayi'
        },
        {
        Name: '屏東縣',
        engName: 'PingtungCounty'
        },
        {
        Name: '宜蘭縣',
        engName: 'YilanCounty'
        },
        {
        Name: '花蓮縣',
        engName: 'HualienCounty'
        },
        {
        Name: '台東縣',
        engName: 'TaitungCounty'
        },
        {
        Name: '金門縣',
        engName: 'KinmenCounty'
        },
        {
        Name: '澎湖縣',
        engName: 'PenghuCounty'
        },
        {
        Name: '連江縣',
        engName: 'LienchiangCounty'
        }
    ]
    const categoryData = [
        {
        Category: '類別',
        engCategory: ''
        },
        {
        Category: '旅遊景點',
        engCategory: 'ScenicSpot'
        },
        {
        Category: '觀光活動',
        engCategory: 'Activity'
        },
        {
        Category: '住宿推薦',
        engCategory: 'Hotel'
        },
        {
        Category: '美食品嚐',
        engCategory: 'Restaurant'
        }
    ]
    const searchCity = ref('')
    const searchCategory = ref('')
    const router = useRouter()
    const searchResult = ref([])
    let detail = ref([])
    let skipPage = ref(0)
    let nowPage = ref(20)
    const nextPage = () => {
        skipPage.value = skipPage.value + 20;
        nowPage.value = nowPage.value + 20;
        getResult();
    }
    const getResult = () => {
        searchResult.value = [];
        axios
        .get(
            `https://tdx.transportdata.tw/api/basic/v2/Tourism/${searchCategory.value}/${searchCity.value}?%24top=${nowPage.value}&%24skip=${skipPage.value}&%24format=JSON`
        )
        .then((res) => {
            console.log(res)
            searchResult.value = res.data
            router.push('/result')
        })
    }
    const getDetail = (i) =>{
        detail.value = searchResult.value[i];
        console.log(detail.value);
        router.push('/detail');
    }
    return {
        cityData,
        categoryData,
        searchCity,
        getResult,
        searchCategory,
        searchResult,
        skipPage,
        nowPage,
        nextPage,
        getDetail,
        detail
    }
})
