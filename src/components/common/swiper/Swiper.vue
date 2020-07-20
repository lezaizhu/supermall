<template>
  <div id="my-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="swiper">
      <slot></slot>
    </div>

    <div class="indicator" v-if="showIndicator && slideCount > 1">
      <!-- <slot name="indicator"> -->
        <div v-for="(value, index) in slideCount" class="indi-item" :class="{active: (index + 1) == currentIndex}"></div>
      <!-- </slot> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  // props: {
  //   banners: {
  //     type: Array,
      // default () {
      //   return []
      // },
      // required: true
    // }
  // },
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      playTimer: null,
      slideCount: 0, // 元素个数
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false, // 是否正在滚动
      firstOrLastSlide: false,
      isOperate: false

      // distance: null
    }
  },
  // created () {
  //   console.log(this.banner)
  // }
  mounted () {
    // 1. 使用计时器来操作DOM
    // setTimeout(() => {
    //   // 1. 操作DOM, 在前后添加slide
    //   this.handleDom()

    //   // 2. 开启计时器
    //   this.startTimer()

    // }, 1000)

    // 2. 使用$nextTick操作DOM
    // this.$nextTick(() => {
      setTimeout(() => {
      this.handleDom()

      this.startTimer()

    }, 2000)
    // })
  },
  methods: {
    // 定时器操作
    startTimer () {
      // if (this.playTimer) return
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval)
    },

    // 停止定时器
    stopTimer () {
      clearInterval(this.playTimer)
    },

    // 滚动操作
    scrollContent (currentPosition) {
      // 1. 标志正在滚动
      this.scrolling = true

      // 2. 开始滚动动画
      // this.swiperStyle.transition ='transform '+ this.animDuration + 'ms'
      this.swiperStyle.transition ='transform '+ this.animDuration + 'ms'
      this.setTransform(currentPosition)

      // 3. 判断滚动到的位置
      this.checkPosition()

      // 4. 滚动完成
      setTimeout(() => {
        this.scrolling = false
      }, this.animDuration)
    },

    // 检查位置
      // 判断跳转第一个还是最后一个 
    checkPosition () {
      window.setTimeout(() => {
        // 1.校验正确的位置
        this.swiperStyle.transition = '0ms'
        if (this.currentIndex >= this.slideCount +1) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalWidth)
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
      }, this.animDuration)
      this.firstOrLastSlide = false
    },  
    
    // 触摸屏幕开始
    touchStart (e) {
      // 正在滑动或者切换到第一或者最后一张的时候不可以操作
      // if (this.scrolling || this.firstOrLastSlide) return
      this.shutDown()

      // 操作的时候暂停自动滑动

      this.stopTimer()

      this.startX = e.touches[0].pageX
    },
    touchMove (e) {
      this.shutDown()

      // 使图片跟着手指滑动

      // 当前的X
      this.currentX = e.touches[0].pageX
      // 位移的x距离
      this.distance = this.currentX - this.startX
      //
      let currentPosition = -this.current * this.totalWidth
      let moveDistance = currentPosition + this.disntance

      this.setTransform(moveDistance)

    },
    // 触摸屏幕结束
    touchEnd () {
      this.shutDown()

      // 实际移动的距离
      let currentMove = Math.abs(this.distance)
      // 设置滑动临界值
      let moveBorder = this.totalWidth * this.moveRatio

      // 判断最终的距离
      if (this.disntance == 0) {
        return
      } else if (this.distance > 0 && currentMove > moveBorder) {
        this.currentIndex--
      } else if (this.distance < 0 && currentMove > moveBorder) {
        this.currentIndex++
      }

      // 移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth)

      this.startTimer()
      this.startX = 0
      this.currentX = 0
      this.distance = 0
    },
    handleDom () {
      // 1. 获取需要操作的元素
      let swiperEl = this.$refs.swiper
      if (swiperEl) {
        let slidesEls = swiperEl.querySelectorAll('.slide')
        // console.log(swiperEl)
        // console.log(slidesEls)

        // 2. 保存个数
        this.slideCount = slidesEls.length

        // 3. 如果个数大于1个, 那么在前后分别添加一个slide
        if (this.slideCount > 1) {
          let cloneFirst = slidesEls[0].cloneNode(true)
          let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
          swiperEl.insertBefore(cloneLast, slidesEls[0])
          swiperEl.appendChild(cloneFirst)
          this.totalWidth = swiperEl.offsetWidth
          this.swiperStyle = swiperEl.style
        }
        // console.log(this.swiperStyle.transform)
        this.setTransform(-this.totalWidth);
        // console.log(this.swiperStyle.transform)
        // console.log(this.swiperStyle.transition)
      }
      
    },

    // 工具
    // 设置水平位移
    setTransform (positon) {
      this.swiperStyle.transform = `translate3d(${ positon }px, 0, 0)`
    },
    // 禁止滑动的条件
    shutDown () {
      if (this.scrolling || this.firstOrLastSlide) return
    }
  }
}
</script>

<style>
#my-swiper {
  position: relative;
  overflow: hidden;
}
.swiper {
  display: flex;
}
.swiper a {
  /* font-size:0;  */
  /* display: block; */
  /* line-height:0px; */
  overflow: hidden;
}
.swiper img {
  vertical-align: bottom;
}
.indicator {
  display: flex;
  position: absolute;
  bottom: 8px;
  width: 100%;
  justify-content: center;
}
.indi-item {
  background-color: #fff;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 0 5px;
}
.indi-item.active {
  background-color: rgba(212, 62, 46, 1.0);
}
</style>