<template>
    <scroll class="list" :data="cities" ref="scroll">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                         v-for="item in hot"
                         :key="item.id"
                         @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) in cities " :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom"
                         v-for="innerItem in item"
                         :key="innerItem.id"
                         @click="handleCityClick(innerItem.name)">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </scroll>
</template>

<script>
  import Scroll from '@/components/scroll/scroll'

  export default {
    name: 'CityList',
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    components: {
      Scroll
    },
    mounted() {
    },
    methods: {
      handleCityClick(city) {
        this.$store.commit('changeCity', city)
        this.$router.push('/')
      }
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.$refs.scroll.scrollToElement(element)
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc

    .border-bottom
    &:before
        border-color: #ccc

    .list
        top: 1.58rem

        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .26rem

        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem

        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
</style>