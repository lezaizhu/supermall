<template>
  <swiper :banners="banners">
    <template>
      <swiper-item v-for="(value, index) in banners" :key="index">
        <template v-slot:default>
          <a :href="value.link">
            <img :src="value.image" alt="" @load="swiperImgLoad">
          </a>
        </template>
      </swiper-item>
    </template>
  </swiper>
</template>

<script>
import { getHomeMultidata } from 'network/home.js'
import { Swiper, SwiperItem } from 'components/common/swiper/index.js'
import { debounce } from 'common/utils.js'

export default {
  name: 'MainSwiper',
  components: {
    Swiper, 
    SwiperItem
  },
  data () {
    return {
      banners: null,
      isLoad:false
    }
  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      // console.log(this.banners)
    })
  },
  methods: {
    swiperImgLoad () {
      if (!this.isLoad) {
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>