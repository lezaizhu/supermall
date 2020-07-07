<template>
  <div class="slide">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem'
}
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
  /* height: 390px; */
  /* width: 750px; */
}

.slide img {
  width: 100%;
}
</style>