<template>
  <div id="cart">
    <cart-nav-bar/>
    <scroll class="content" ref="scroll">
      <cart-goods-info />
    </scroll>
    <cart-calculate />
  </div>
</template>

<script>
  import CartNavBar from './childrenCpns/CartNavBar.vue'
  import Scroll from 'components/common/betterscroll/Scroll.vue'
  import CartGoodsInfo from './childrenCpns/CartGoodsInfo.vue'
  import CartCalculate from './childrenCpns/CartCalculate.vue'
  // 混入
  import { bindImgLoad } from 'common/mixin.js'
  export default {
  name: 'Shoppingcart',
  components: {
    CartNavBar,
    Scroll,
    CartGoodsInfo,
    CartCalculate
  },
  mounted () {
    this.$refs.scroll.refresh()
  },
  mixins: [bindImgLoad],
  deactivated () {
    this.$bus.$off('imgLoad', this.imgLoadAndRefresh)
    console.log('cart的imgLoad事件解绑了')
  },
}
</script>

<style scoped>
#cart {
  height: 100vh;;
}
.content {
  width: 100%;
  overflow: hidden;
  height: calc(100% - 44px - 49px - 44px);
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>