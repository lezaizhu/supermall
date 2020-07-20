<template>
  <div class="goods">
    <goods-item v-for="(value, index) in goods" 
                :key="itemIid(value)" 
                class="goods-item"
                @click.native="itemClick(itemIid(value))">
      <template #img>
        <img v-lazy="itemImg(value)" alt="" @load="imgLoad">
      </template>
      <template #title>
        <p class="title">{{ value.title }}</p>
      </template>
      <template #collect>
        <span class="price">{{ value.price }}</span>
      </template>
      <template #price>
        <span class="collect">{{ value.cfav }}</span>
      </template>
    </goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
// 防抖函数
import { debounce } from 'common/utils.js'
// 根据iid请求的函数
// import { getDetail } from 'network/detail.js'

export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    },
    isPush: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  components: {
    GoodsItem
  },
  methods: {
    // 1. 图片加载完成scoll刷新
    imgLoad () {
      this.$bus.$emit('imgLoad')
      // if (this.$route.path.indexOf('/home') > -1) {
      //   this.$bus.$emit('homeimgLoad')
      // } else if (this.$route.path.indexOf('detail') > -1) {
      //   this.$bus.$emit('detailLoad')
      // }
    },
    // 2. 
    itemClick (iid) {
      // getDetail(iid).then(res => {
      //   console.log(res)
      // })
      this.isPush && this.$router.push(`/detail/${iid}`)
    },
    itemIid (value) {
      return value.item_id || value.iid
    },
    itemImg (value) {
      return value.image || value.show.img
    }
  }
}
</script>

<style scoped>
.goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px;
}
.goods-item {
  width: 50%;
  padding: 3px;
  font-size: 12px;
  text-align: center;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.title {
  color: rgb(102, 102, 102);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 24px;
}
.price {
  color: #ff5777;
  padding-right: 20px;
}
.collect {
  position: relative;
}
.collect::before {
  content: '';
  position: absolute;
  left: -15px;
  /* top: -1px; */
  width: 14px;
  height: 14px;
  vertical-align: middle;
  background: url("~assets/img/common/collect.svg") no-repeat 0 0/14px 13px;
  /* background-position: -2px -2px; */
}
</style>