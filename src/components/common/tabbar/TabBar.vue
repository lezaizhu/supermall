<template>
  <div class="tab-bar">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
.tab-bar {
  font-size: 14px;
  height: 49px;
  /* position: fixed; */
}
</style>