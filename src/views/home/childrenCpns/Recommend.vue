<template>
  <div class="recommend">
    <div v-for="(value, index) in recommends" :key="index" class="recommend-item">
      <a :href="value.link">
        <img :src="value.image" alt="" @load="recommendImgLoad">
        <div>{{ value.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { getHomeMultidata } from 'network/home.js'

export default {
  name: 'Recommend',
  data () {
    return {
      recommends: null,
      isLoad: false
    }
  },
  created () {
    getHomeMultidata().then(res => {
      this.recommends = res.data.recommend.list
    })
  },
  methods: {
    recommendImgLoad () {
      if (!this.isLoad) {
        this.$emit('recommendImgLoad')
        this.isLoad = true
      }
    },
  }
}
</script>

<style scoped>
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  background-color: #fff;
  border-bottom: 10px solid rgba(238, 238, 238);
  /* text-align: center; */
  /* flex-direction: row-reverse; */
}
.recommend-item {
  /* background-color: #fff; */
  /* display: inline-block; */
  /* width: 25%; */
  /* float: left; */
  /* display: inline; */
  flex: 1;
}
.recommend-item a {
  color: rgb(102, 102, 102);

  /* display: inline-block; */

  /* width: 100%; */
  /* display: block; */
  /* width: 100%; */
}
.recommend-item img {
  width: 100%;
  max-width: 70px;
  margin-bottom: 10px;
  /* height: 70px; */
  /* display: inline-block; */

  /* width: 100%; */
} 
</style>