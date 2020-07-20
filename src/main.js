import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import store from './store'

// 提示框插件
import toast from './components/common/toast/index.js'
Vue.use(toast)

// 解决移动端300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 图片懒加载插件
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)


Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
