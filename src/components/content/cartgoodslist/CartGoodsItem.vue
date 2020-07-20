<template>
  <div class="cart-goods-item">
    <div class="cart-button">
      <check-button :index="index"/>
    </div>
    <div class="cart-goods-content">
      <div class="cart-goods-img">
        <img :src="cartGoodsItem.imgURL" alt="" @load="imgLoad">
      </div>
      <div class="cart-goods-info">
        <div class="cart-goods-title">{{ cartGoodsItem.title }}</div>
        <div class="cart-goods-desc">商品描述: {{ cartGoodsItem.desc }}</div>
        <div class="cart-goods-price">
          ￥{{ cartGoodsItem.newPrice }}
        </div>
        <div class="cart-goods-count">
          X{{ cartGoodsItem.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";

export default {
  name: 'CartGoodsItem',
  components: {
    CheckButton
  },
  props: {
    cartGoodsItem: {
      type: Object,
      default () {
        return {}
      }
    },
    index: {
      type: Number
    }
  },
  methods: {
    imgLoad () {
    this.$bus.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.cart-goods-item {
  width: 100%;
  padding: 5px;
  display: flex;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.cart-button {
  display: flex;
  justify-content: center;
  /* -webkit-box-align: center; */
  /* width: 36px; */
  align-items: center;
}
.cart-goods-content {
  width: 100%;
  flex: 1;
  display: flex;
  overflow: hidden;
}
.cart-goods-img img {
  display: block;
  width: 80px;
  height: 115px;
  padding: 5px;
  border-radius: 10px;
}
.cart-goods-info {
  flex: 1;
  position: relative;
  overflow: hidden;
  padding: 5px 10px;
}
.cart-goods-title,
.cart-goods-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cart-goods-title {

}
.cart-goods-desc {
  color: #666;
  margin-top: 15px;
  line-height: 22px;
  font-size: 14px;
}
.cart-goods-count,
.cart-goods-price {
  position: absolute;
  bottom: 10px;
}
.cart-goods-count {
  right: 0;
}
.cart-goods-price {
  left: 10px;
  color: #ff4500
}
</style>
