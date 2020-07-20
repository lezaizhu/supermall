<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message, delay = 2000) {
      this.message = message
      this.isShow = true
      message
      setTimeout (() => {
        this.isShow = false
        message = ''
      }, delay)
    }
  }
}
</script>

<style scoped>
.toast {
  font-size: 16px;
  padding: 10px 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  color: #eee;
}
</style>