<template>
  <div class="tab-control">
    <div v-for="(value, index) in titles"
         class="tab-control-item"
         :class="{active: currentIndex == index}"
         @click="tabClick(index)">
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    // 1. 获取当前的offsetTop
    getOffsetTop () {
      return this.$el.offsetTop
    }
  },
  methods: {
    tabClick (index) {
      // this.currentIndex = index
      this.$emit('tabClick', index)
    },
    makeSameIndex (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active span {
  color: rgb(255, 129, 152);
  border-bottom: 2px solid rgb(255, 129, 152);
}
</style>