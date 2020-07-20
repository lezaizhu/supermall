import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {
  console.log('toast插件已加载')
  // 1.创造toast构建函数
  const toastConstructor = Vue.extend(Toast)
  // 2. 使用构建函数创造实例
  const toast = new toastConstructor()
  // 3. 挂载到新创建的一个div上面
  toast.$mount(document.createElement('div'))
  // 4. 在body中添加这个实例中的$el
  document.body.appendChild(toast.$el)
  // 5. 在总vue实例中把$toast指向当前的toast的vue实例
  Vue.prototype.$toast = toast
}

// 复习
obj.install = function (Vue) {
  const toastConstructor = Vue.extend(Toast)
  const toast = new toastConstructor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj