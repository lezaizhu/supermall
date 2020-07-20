<template>
  <div class="bottom-bar">
    <div class="bottom-left">
      <div>
        <span class="icon service"></span>
        <span>客服</span>
      </div>
      <div>
        <span class="icon shop"></span>
        <span>店铺</span>
      </div>
      <div>
        <span class="icon collect"></span>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <span class="add-cart" @click="addToCart">加入购物车</span>
      <span class="buy">购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart () {
      this.$emit('addToCart')
      console.log('已添加到购物车')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 58px;
  display: flex;
  text-align: center;
  font-size: 13px;
  color: #666;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
}
.bottom-left {
  flex: 1;
  display: flex;
}
.bottom-left div {
  flex: 1
}
.bottom-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 5px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/22px no-repeat;
  /* background-size: 22px 150px; */
}
.bottom-right {
  display: flex;
  flex: 1;
}

.icon.service {
  background-position: 0 -52px;
}
.icon.shop {
  background-position: 0 -99px;
}
.bottom-right .add-cart,
.bottom-right .buy {
  flex: 1;
  line-height: 58px;
  font-size: 15px;
}
.add-cart {
  color: black;
  background-color: #ffe817;
}
.buy {
  color: #fff;
  background-color: #ff6699;
}
</style>