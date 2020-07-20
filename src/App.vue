<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="isShowTabBar"></main-tab-bar>
    <!-- <button @click="test">test</button> -->
  </div>
</template>

<script>

import { request } from 'network/request'
import MainTabBar from 'components/content/tabbar/MainTabBar.vue'
// import axios from 'axios'

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  computed: {
    isShowTabBar () {
      return this.$route.path.indexOf('detail') == -1
    }
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
