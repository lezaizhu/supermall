<template>
  <div>
    <cart-goods-item v-for="(cartGoodsItem, index) in $store.state.cartList" 
                     :key="index"
                     :index="index"
                     :cart-goods-item="cartGoodsItem" />
  </div>
</template>

<script>
import CartGoodsItem from './CartGoodsItem.vue'

export default {
  name: 'CartGoodsList',
  data () {
    return {
      cartGoodsList: null
    }
  },
  components: {
    CartGoodsItem
  },
}
</script>

<style scoped>

</style>