<template>
  <div>
    <slot name="img"></slot>
    <div class="content">
      <slot name="title"></slot>
      <slot name="collect"></slot>
      <slot name="price"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem'
}
</script>

<style scoped>
.content {
  height: 40px;
}
</style>