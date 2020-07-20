<template>
  <swiper class="swiper">
    <template>
      <swiper-item v-for="(value, index) in banners" :key="index">
        <template>
          <!-- <img :src="value" alt="" @load="swiperImgLoad"> -->
          <img :src="value">
            <!-- <img  alt="" >
            {{ value }} -->
            <!-- <a href=""></a> -->
        </template>
      </swiper-item>
    </template>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js'

export default {
  name: 'DetailSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return null
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
</style>