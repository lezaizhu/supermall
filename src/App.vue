<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <!-- <button @click="test">test</button> -->
  </div>
</template>

<script>

import {request} from 'network/request'
import MainTabBar from 'components/content/tabbar/MainTabBar.vue'
// import axios from 'axios'

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data () {
    return {
      data: null,
    }
  },
  created () {
    request({
      url: '/home/multidata'
    }).then(res => {
      // console.log(res)
      this.data = res.data
    })
  },
  methods: {
    test () {
      console.log(this.data)
    }
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
