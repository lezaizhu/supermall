<template>
  <div class="cart-calculate">
    <div class="check-all">
      <div class="circle" 
           :class="{ 'is-check-all': isCheckAll }"
           @click="selectorAll">
      </div>
      <span>全选</span>
    </div>
    <div class="summation">
      合计:{{ summation | showPrice }}
    </div>
    <div class="calculate">去计算({{ getCheckLength }})</div>
  </div>
</template>

<script>
// 获取vex中的getters
import { mapGetters } from 'vuex'

export default {
  name: 'CartCalculate',
  computed: {
    // 获取商品数量
    ...mapGetters(['getCheckLength']),
    // 合计
    summation () {
      let all = 0
      this.$store.state.cartList.map(value => {
        // console.log(value.count)
        // console.log(parseInt(value.newPrise) * value.count)
        if (value.checked) {
          all += parseInt(value.newPrice) * value.count
        }
      })
      return all
    },
    isCheckAll () {
      return this.$store.state.isCheckAll
    }
  },
  methods: {
    selectorAll () {
      this.$store.commit('changeSelectorAll')
    }
  },
  filters: {
    showPrice (price) {
      return `￥${price.toFixed(2)}`
    }
  }
}
</script>

<style scoped>
.cart-calculate {
  width: 100%;
  background-color: #eee;
  display: flex;
  height: 44px;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);

  align-items: center;
  color: #888;

  position: fixed;
  bottom: 44px;
}
/* 全选部分 */
.check-all {
  /* flex: 1; */
  width: 70px;
  display: flex;
  font-size: 14px;
}
.circle {
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin: 0 8px;
}
.is-check-all {
  background: #ff8198 url('~assets/img/cart/tick.svg');
  border: 2px solid #ff8198;
}
/* 合计部分 */
.summation {
  flex: 1;
  color: #666;
  padding-left: 20px;
}
/* 计算部分 */
.calculate {
  height: 100%;
  line-height: 44px;
  text-align: center;
  width: 100px;
  color: white;
  background-color: #ff4500;
  /* flex: 1; */
}
</style>