<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left_nav"></slot>
    </div>
    <div class="center">
      <slot name='title'>购物车</slot>
    </div>
    <div class="right">
      <slot name="right_nav"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1); 
}
.left, .right {
  width: 60px;
  /* background-color: blue; */
}
.center {
  /* background-color: red; */
  flex: 1;
}
</style>