<template>
    <div class="scroll" ref="scroll">
        <slot></slot>
    </div>
</template>

<script>
  /* eslint-disable vue/require-prop-type-constructor */

  import BScroll from 'better-scroll'

  export default {
    name: 'scroll',
    props: {
      data: {
        type: Array | Object,
        default: null
      }
    },
    watch: {
      data() {
        if (this.data) {
          this.refresh()
        }
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true
      })
    },
    methods: {
      refresh() {
        setTimeout(() => {
          this.scroll.refresh()
        }, 20)
      },
      scrollToElement(e) {
        this.scroll && this.scroll.scrollToElement(e)
      }
    }
  }
</script>

<style scoped lang="stylus">
    .scroll
        overflow: hidden
        position: absolute
        left: 0
        right: 0
        bottom: 0
</style>