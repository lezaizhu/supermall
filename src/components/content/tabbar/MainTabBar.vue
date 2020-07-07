<template>
  <tab-bar>
    <!-- <template v-slot:default>
      <button @click="test">test</button>
    </template> -->
    <template v-slot:default>
      <tab-bar-item path="/home">
        <template v-slot:slot-icon>
          <img src="../../../assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="../../../assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:slot-text>首页</template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:slot-icon>
          <img src="../../../assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="../../../assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:slot-text>目录</template>
      </tab-bar-item>
      <tab-bar-item path="/shoppingcart">
        <template v-slot:slot-icon>
          <img src="../../../assets/img/tabbar/shoppingcart.svg" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="../../../assets/img/tabbar/shoppingcart_active.svg" alt="">
        </template>
        <template v-slot:slot-text>购物车</template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:slot-icon>
          <img src="../../../assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="../../../assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:slot-text>我的</template>
      </tab-bar-item>
    </template>
  </tab-bar>
  
</template>

<script>
import TabBarItem from '../../common/tabbar/TabBarItem.vue'
import TabBar from '../../common/tabbar/TabBar.vue'

const props = {
  tabBarData: {
    // type: Array,
    // required
  }
}

export default {
  name: 'MainTabBar',
  props,
  components: {
    TabBarItem,
    TabBar
  },
  data () {
    return {
      msg: 11
    }
  }
}
</script>

<style scoped>
.tab-bar {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -2px 1px rbga(0, 0, 0, 0.5);
  background-color: #f6f6f6;
}

.tab-bar-item img {
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin: 3px;
  margin: 2px;
}
</style>

<!-- <tab-bar>
    <template v-slot:default>
      <tab-bar-item path="/home">
        <template v-slot:slot-icon>
          <img src="~img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="~img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:slot-text>首页</template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:slot-icon>
          <img src="~img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="~img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:slot-text>目录</template>
      </tab-bar-item>
      <tab-bar-item path="/shoppingcart">
        <template v-slot:slot-icon>
          <img src="~img/tabbar/shoppingcart.svg" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="~img/tabbar/shoppingcart_active.svg" alt="">
        </template>
        <template v-slot:slot-text>购物车</template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:slot-icon>
          <img src="~img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="~img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:slot-text>我的</template>
      </tab-bar-item>
    </template>
  </tab-bar> -->