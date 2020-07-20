<template>
  <nav-bar class="cart-bar">
    <template #title>
      <div class="cart-nav-text">购物车({{ getCartLength }})</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'CartNavBar',
  components: {
    NavBar
  },
  computed: {
    getCartLength () {
      return this.$store.getters.getCartLength
    }
  }
}
</script>

<style scoped>
.cart-bar {
  background-color: #ff8198;
}
.cart-nav-text {
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
</style>