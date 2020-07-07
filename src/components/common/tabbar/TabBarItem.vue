<template>
  <div class="tab-bar-item" @click="pathTo">
    <div v-if="!isActive"><slot name="slot-icon"></slot></div>
    <div v-else><slot name="slot-icon-active"></slot></div>
    <div :class="{red: isActive}"><slot name="slot-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      required: true
    }
    // isActive: {
    //   type: Boolean,
    //   required: true
    // }
  },
  computed: { 
    isActive () {
      return this.$route.path === this.path
    }
  },
  methods: {
    pathTo () {
      if (this.$route.path != this.path) {
        this.$router.push(this.path)
      }
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.red {
  color: red;
}
</style>