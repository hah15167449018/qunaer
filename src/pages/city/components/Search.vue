<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <scroll class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)">
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="loading">
                    查找中...
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </scroll>
    </div>
</template>

<script>
  import Scroll from '@/components/scroll/scroll'

  export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    components: {
      Scroll
    },
    data() {
      return {
        keyword: '',
        list: [],
        loading: false
      }
    },
    methods: {
      handleCityClick(city) {
        this.$store.commit('changeCity', city)
        this.$router.push('/')
      }
    },
    computed: {
      hasNoData() {
        return this.list.length === 0 && !this.loading
      }
    },
    watch: {
      keyword() {
        if (this.timer) {
          console.log('clear', this.timer)
          clearTimeout(this.timer)
          this.timer = null
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.loading = true
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
          this.loading = false
        }, 200)
      }
    }
  }
</script>

<style scoped lang="stylus">
    @import "~assets/styles/header.styl"
    .search
        height: .72rem
        padding: 0 .1rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding: 0 .2rem
            line-height: .62rem
            text-align: center
            border-radius: .06rem
            color: #666

    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666
</style>