<template>
  <div id="home">
    <home-nav-bar />
    <tab-control :titles="['流行', '新款', '精选']"
                     @tabClick="tabClick"
                     ref="tabControl2"
                     v-show="isShowTab2"
                     class="tabFixed2"/>
    <scroll class="scroll"
            ref="scroll"
            :probeType="3"
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore">
      <template>
        <main-swiper @swiperImgLoad="swiperImgLoad"/>
        <recommend @recommendImgLoad="recommendImgLoad"/>
        <feature/>
        <tab-control :titles="['流行', '新款', '精选']" 
                     @tabClick="tabClick"
                     ref="tabControl1"/>
        <goods-list :goods="showGoods"/>
      </template>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="goBackTop"/>

  </div>
</template>

<script>
  // 常规组件
  import HomeNavBar from './childrenCpns/HomeNavBar.vue'
  import MainSwiper from './childrenCpns/MainSwiper.vue'
  import Recommend from './childrenCpns/Recommend.vue'
  import Feature from './childrenCpns/Feature.vue'
  import TabControl from 'components/content/tabcontrol/TabControl.vue'
  import GoodsList from 'components/content/goodslist/GoodsList.vue'

  // 功能组件
    // 滑动组件
  import Scroll from 'components/common/betterscroll/Scroll.vue'
    // 回到顶部组件
  import BackTop from 'components/content/BackTop.vue'
    // 网络请求模块
  import { getHomeGoods } from 'network/home.js'
    // 防抖
  import { debounce } from 'common/utils.js'
  
  // 混入
  import { bindImgLoad } from 'common/mixin.js'

export default {
  name: 'Home',
  data () {
    return {
      currentType: 'pop',
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      isShowBackTop: false,
      tabControlTop: 999,
      isShowTab2: false,
      isSwiperImgLoad: false,
      isRecommendImgLoad: false
    }
  },
  mixins: [bindImgLoad],
  components: {
    HomeNavBar,
    Scroll,
    MainSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
    BackTop,
  },
  mounted () {
    // 1. 初始化goods
    this._getHomeGoodsInit()

    // 3. 
    // 3.1 事件总线监听
    // this.$bus.$on('imgLoad', () => {
    //   refresh()
    // })
    // 3.2. scroll刷新加上防抖函数
    // const refresh = debounce(this.$refs.scroll.refresh, 500)
    // 3.3 事件总线监听(处理detail也存在的事件总线被home监听问题)
      // 使用data保存refresh()
    // const newRefresh = debounce(this.$refs.scroll.refresh, 500)
    // this.imgLoadAndRefresh = () => {
    //   // debounce(this.$refs.scroll.refresh, 500)()
    //   newRefresh()
    // }
    // this.$bus.$on('imgLoad', this.imgLoadAndRefresh)

    // 4. 获取tabControl的offsetTop
    // console.log(this.$refs.tabControl)
    // console.log(this.$refs.tabControl.$el)
    // console.log(this.$refs.tabControl.$el.offsetTop)
  },
  deactivated () {
    this.$bus.$off('imgLoad', this.imgLoadAndRefresh)
    console.log('home的事件解绑了')
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    // 1. 给getHomeGoods包装的初始化
    _getHomeGoodsInit () {
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    // 2. 响应并返回goods数据
    getHomeGoods (type) {
      // 当前type下的list
      let currentList = this.goods[type].list
      // 当前type下的page 调用的时候自加+1
      let page = ++this.goods[type].page
      getHomeGoods(type, page).then(res => {
        currentList.push(...res.data.list)
        this.$refs.scroll.finishPullUp()
      })
    },
    // 3. tab-control 监听点击并修改currentType的事件
    tabClick (index) {
      this.$refs.tabControl1.makeSameIndex(index)
      this.$refs.tabControl2.makeSameIndex(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    // 4. 拉到最下面加载更多 依靠currentType
    loadMore () {
      this.getHomeGoods(this.currentType)
    },
    // 5. content发生滚动
    contentScroll (y) {
      // 显示backTop
      y >= 2000 && (this.isShowBackTop = true)
      // tabControl替身
      y >= (this.tabControlTop) ? (this.isShowTab2 = true) : (this.isShowTab2 = false)
    },
    // 回到顶部
    goBackTop () {
      this.$refs.scroll.goBackTop(0, 0)
    },
    // 轮播图加载完成
    swiperImgLoad () {
      this.isSwiperImgLoad = true
      ;(this.isSwiperImgLoad && this.isRecommendImgLoad) && (this.tabControlTop = this.$refs.tabControl1.getOffsetTop)
    },
    // recommend加载完成
    recommendImgLoad () {
      this.isRecommendImgLoad = true
      ;(this.isSwiperImgLoad && this.isRecommendImgLoad) && (this.tabControlTop = this.$refs.tabControl1.getOffsetTop)
    }
  }
}
</script>

<style scoped>
#home {
  /* background-color: var(--color-tint); */
  /* padding-bottom: 1000px; */
  height: 100vh;
  position: relative;
}
.scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: calc(100% - 93px); */
  /* height: 100px; */
}
.tabFixed2 {
  position: relative;
  z-index: 9;
}
</style>
