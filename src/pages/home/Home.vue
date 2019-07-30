<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
  import HomeHeader from './components/header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import {getIndex} from '@/api/qunar'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeInfo() {
        getIndex().then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }

      }
    },
    mounted() {
      this.getHomeInfo()
    }
  }
</script>

<style scoped>

</style>