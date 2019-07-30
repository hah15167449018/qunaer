<template>
    <ul class="list" ref="list">
        <li class="item"
            v-for="item in letters"
            :key="item"
            :ref="item"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick">{{item}}
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    computed: {
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    data() {
      return {
        touchStatus: false,
        startY: 0
      }
    },
    undated() {
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          const touchY = e.touches[0].clientY - (this.$refs.list.offsetTop * 2)
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    }
  }
</script>

<style scoped lang="stylus">
    @import "~assets/styles/header.styl"
    .list
        display: flex
        flex-direction: column
        justify-content: center
        position: fixed
        top: 1.58rem
        right: 0
        bottom: 0
        width: .4rem
        .item
            line-height: .4rem
            text-align: center
            color: $bgColor
</style>