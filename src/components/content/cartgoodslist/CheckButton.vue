<template>
  <div class="selector" 
       @click="itemClick"
       :class="{ 'selector-active': isChecked }">
    <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    index: {
      type: Number
    }
  },
  methods: {
    itemClick () {
      this.$store.commit('changeChecked', this.index)
      this.$store.commit('checkAllSelector')
    }
  },
  computed: {
    isChecked () {
      return this.$store.state.cartList[this.index].checked
    }
  }
}
</script>

<style scoped>
.selector {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;  
}
.selector img {
  width: 14px;
}
.selector-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>