<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left_nav"></slot>
    </div>
    <div class="center">
      <slot name='title'></slot>
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
  width: 100%;
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1); 
  top: 0;
  z-index: 9;
}
.left, .right {
  width: 60px;
}
.center {
  text-align: center;
  flex: 1;
  display: flex;
}
</style>