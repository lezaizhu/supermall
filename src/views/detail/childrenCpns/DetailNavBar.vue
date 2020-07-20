<template>
  <nav-bar class="nav-bar">
    <template v-slot:left_nav>
      <div>
        <img src="~/assets/img/common/back.svg" class="backImg"
              @click="backClick">
      </div>
    </template>
    <template v-slot:title>
      <div v-for="(value, index) in titles" 
            :key="index" 
            class="title-item"
            :class="{ active: currentIndex == index }"
            @click="navClick(index)">
        {{ value }}
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    navClick (index) {
      this.currentIndex = index
      this.$emit('navClick', index)
      
    },
    backClick () {
      this.$router.go(-1)
    }
  }
  
}
</script>

<style scoped>
.title-item {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
.backImg {
  padding-top: 12px;
}
</style>