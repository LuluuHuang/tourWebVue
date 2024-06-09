import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const BASE_URL = import.meta.env.VITE_BASE_URL;
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
        engCategory: 'ScenicSpot',
        mores:[
                {
                    moreName:'國立故宮博物院',
                    morePic:'https://www.travel.taipei/image/221739/?r=1637566579522'
                },
                {
                    moreName:'國立中正紀念堂',
                    morePic:'https://www.travel.taipei/image/222959/?r=1638166360241'
                },
                {
                    moreName:'台北101',
                    morePic:'https://www.travel.taipei/content/images/attractions/64607/1024x768_attractions-image-jjmofe2wt0calhfnw2cfca.jpg'
                }
            ]
        },
        {
        Category: '觀光活動',
        engCategory: 'Activity',
        mores:[
            {
                moreName:'2024臺北國際龍舟錦標賽',
                morePic:'https://www.travel.taipei/content/images/articles/430767/1024x768_articles-image-rs4d8wbdakadanjiw6ofwa.jpg'
            },
            {
                moreName:'2024竹子湖海芋季及繡球花季',
                morePic:'https://ak-d.tripcdn.com/images/1mj4n12000b4ejkck77B2_Z_640_10000_R5.jpg_.webp?proc=autoorient'
            },
            {
                moreName:'2024台北霞海城隍文化節',
                morePic:'https://www.travel.taipei/content/images/articles/430752/1024x768_articles-image--p7_8nbigkivpy7mxycgjq.jpg'
            }
        ]
        },
        {
        Category: '住宿推薦',
        engCategory: 'Hotel',
        mores:[
            {
                moreName:'台北漫步旅店Meander Taipei Hostel',
                morePic:'https://i.pinimg.com/564x/6c/88/6a/6c886a58955b62b80b29d29a69432904.jpg'
            },
            {
                moreName:'華山文旅Wallsun Hotel Taipei',
                morePic:'https://i.pinimg.com/564x/06/fd/9d/06fd9dde192fe02644663c4bda0cf6ca.jpg'
            },
            {
                moreName:'悠逸商旅UiNN Business Hotel',
                morePic:'https://i.pinimg.com/564x/76/30/44/763044954ba307ea156aa46e3d18d5b1.jpg'
            }
        ]
        },
        {
        Category: '美食品嚐',
        engCategory: 'Restaurant',
        mores:[
            {
                moreName:'頂鮮台南擔仔麵 台北101店',
                morePic:'https://cc.tvbs.com.tw/img/program/upload/2022/08/19/20220819170736-c5fde9f4.jpg'
            },
            {
                moreName:'上吉燒肉-東區燒肉美食餐廳',
                morePic:'https://cc.tvbs.com.tw/img/program/upload/2023/04/11/20230411182623-1ceda267.jpg'
            },
            {
                moreName:'隱鍋 台北林森北路店',
                morePic:'https://storage.googleapis.com/www-cw-com-tw/article/202212/article-63a3c15276556.jpg'
            }
        ]
        }
    ]
    const searchCity = ref('')
    const searchCategory = ref('')
    const router = useRouter()
    const searchResult = ref([])
    const keyWord = ref('')
    let detail = ref([])
    let skipPage = ref(0)
    let nowPage = ref(20)
    const search = () => {
        skipPage.value = 0;
        searchResult.value = [];
        getResult();
    }

    const nextPage = () => {
        skipPage.value = skipPage.value + 20;
        getResult();
    }
    const prePage = () =>{
        if(skipPage.value>20){
            skipPage.value = skipPage.value - 20;
            getResult();
        }else{
            getResult();
            console.log('已是最前資料');
        }
    }
    const getResult = () => {
        searchResult.value = [];
        if(keyWord.value == ''){
            axios
            .get(
                `${BASE_URL}/${searchCategory.value}/${searchCity.value}?%24top=${nowPage.value}&%24skip=${skipPage.value}&%24format=JSON`
            )
            .then((res) => {
                console.log(res);
                searchResult.value = res.data;
                router.push('/result')
            })
        }else{
            const searchKeyword = encodeURIComponent(keyWord.value);
            axios
            .get(
                `${BASE_URL}/${searchCategory.value}/${searchCity.value}?%24filter=contains%28${searchCategory.value}Name%2C%27${searchKeyword}%27%29&%24top=${nowPage.value}&%24skip=${skipPage.value}&%24format=JSON`
            )
            .then((res) => {
                console.log(res);
                searchResult.value = res.data;
                router.push('/result')
            })
        }
        
    }
    const getDetail = (i) =>{
        detail.value = searchResult.value[i];
        console.log(detail.value);
        router.push('/detail');
    }
    const getMore = (item) =>{
        skipPage.value = 0;
        axios
            .get(
                `${BASE_URL}/${item}?%24top=${nowPage.value}&%24skip=${skipPage.value}&%24format=JSON`
            )
            .then((res) => {
                console.log(res);
                searchResult.value = res.data;
                searchCategory.value = item;
                router.push('/result')
            })
    }
    return {
        cityData,
        categoryData,
        searchCity,
        search,
        getResult,
        searchCategory,
        searchResult,
        skipPage,
        nowPage,
        nextPage,
        prePage,
        getDetail,
        detail,
        keyWord,
        getMore
    }
})
