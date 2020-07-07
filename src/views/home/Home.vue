<template>
  <div id="home">
    <nav-bar></nav-bar>
    <main-swiper></main-swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import MainSwiper from './childrenCpn/MainSwiper.vue'
  // import { getHomeMultidata } from 'network/home.js'

export default {
  name: 'Home',
  // data () {
  //   return {
  //     banners: null
  //   }
  // },
  components: {
    NavBar,
    MainSwiper
  },
  // created () {
  //   getHomeMultidata().then(res => {
  //     this.banners = res.banner.list
  //     // console.log(res.banner.list)
  //   })
  // }
}
</script>

<style scoped>
#home {
  background-color: var(--color-tint);
}
</style>