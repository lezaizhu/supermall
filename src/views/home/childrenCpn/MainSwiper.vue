<template>
  <swiper :banners="banners">
    <template>
      <swiper-item v-for="(value, index) in banners" :key="index">
        <template v-slot:default>
          <a :href="value.link">
            <img :src="value.image" alt="">
          </a>
        </template>
      </swiper-item>
    </template>
  </swiper>
</template>

<script>
import { getHomeMultidata } from 'network/home.js'
import { Swiper, SwiperItem } from 'components/common/swiper/index.js'

export default {
  name: 'MainSwiper',
  components: {
    Swiper, 
    SwiperItem
  },
  data () {
    return {
      banners: null
    }
  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.banner.list
      // console.log(res.banner.list)
    })
  }
}
</script>

<style scoped>

</style>