<template>
  <nav-bar class="home-nav">
    <template #title>
      <div class="text">
        购物街
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'HomeNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home-nav {
  /* position: fixed; */
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  left: 0;
  right: 0;
  top: 0; 
}
.text {
  flex: 1;
  text-align: center;
}
</style>