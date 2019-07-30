<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="swiperList.length">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      swiperList: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 2500
        }

      }
    }
  }
</script>

<style scoped lang="stylus">
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.25%
        .swiper-pagination-bullet-active
            background: red !important
        .swiper-img
            width: 100%
            height: 2.25rem


</style>