import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用vueRouter插件
Vue.use(VueRouter)


// 配置映像
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile.vue')
  },
  {
    path: '/category',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/shoppingcart',
    component: () => import('views/cart/Cart.vue')
  },
  {
    path: '/detail/:iid',
    component: () => import('views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router