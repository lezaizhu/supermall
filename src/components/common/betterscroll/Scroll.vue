<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default () {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default () {
        return false
      }
    },
    pullDownRefresh: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  mounted () {
    // 1. 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      // pullDownRefresh: this.pullDownRefresh
      useTransition: false
    })
    // 2. 监听滚动位置
    if (this.probeType === 2 || this.probeType === 3)
    this.scroll.on('scroll', position => {
      this.$emit('scroll', -position.y)
    })
    // 3. 监听scroll滚动到底部
    this.pullUpLoad && this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    // 1. 重新提供上拉刷新的方法
    finishPullUp () {
      this.scroll.finishPullUp()
    },
    // 2. 移动的方法
    goBackTop (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    // 3. 根据现有DOM重新刷新的方法
    refresh () {
      console.log('scroll is refreshing...')
      this.scroll.refresh()
    },
    // 4. 获取当前y的移动距离
    getScrollY () {
      return this.scroll ? this.scroll.y : 0
    },
    // 5. 滑动函数
    scrollTo (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>

</style>