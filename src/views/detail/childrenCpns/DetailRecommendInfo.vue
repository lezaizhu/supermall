<template>
  <goods-list :goods="recommendInfo" :isPush="false"></goods-list>
</template>

<script>
import GoodsList from 'components/content/goodslist/GoodsList.vue'

export default {
  name: 'DetailRecommendInfo',
  components: {
    GoodsList
  },
  data () {
    return {
      goods: []
    }
  },
  props: {
    recommendInfo: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    // this.goods = this.recommendInfo
  }
}
</script>

<style scoped>

</style>