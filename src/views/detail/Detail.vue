<template>
  <div id="detail">
    <detail-nav-bar @navClick="navClick" ref="navBar"/>
    <scroll class="content" @scroll="contentScroll" :probeType="3" ref="scroll">
      <detail-swiper :banners="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="detailImgLoad"/>
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
      <detail-recommend-info :recommendInfo="recommendInfo" ref="recommend"/>  
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <!-- <toast ref="toast"/> -->
  </div>
</template>

<script>
import DetailNavBar from './childrenCpns/DetailNavBar.vue'
import DetailSwiper from './childrenCpns/DetailSwiper.vue'
import DetailBaseInfo from './childrenCpns/DetailBaseInfo.vue'
import DetailShopInfo from './childrenCpns/DetailShopInfo.vue'
import DetailGoodsInfo from './childrenCpns/DetailGoodsInfo.vue'
import DetailParamInfo from './childrenCpns/DetailParamInfo.vue'
import DetailCommentInfo from './childrenCpns/DetailCommentInfo.vue'
import DetailRecommendInfo from './childrenCpns/DetailRecommendInfo.vue'
import DetailBottomBar from './childrenCpns/DetailBottomBar.vue'
// import Toast from  'components/common/toast/Toast.vue'
// 网络请求方法
import { getDetail, getRecommend, Goods, Shop, GoodsParam } from 'network/detail.js'

// 滚动模块
import Scroll from 'components/common/betterscroll/Scroll.vue'

// 防抖函数
import { debounce } from 'common/utils.js'

// 混入
import { bindImgLoad } from 'common/mixin.js'

// 导入mapActions
import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll,
    // Toast
  },
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: [],
      // 记录navBar中导航哪一个处于current
      currentIndex: 0,
      scrollRefresh: null,
      getCpnsOffsetTop: null,
      cpnsOffsetTop: []
      // 图片加载刷新
      // imgLoadAndRefresh: null,
    }
  },
  mixins: [bindImgLoad],
  created () {
    this._getDetail()
    this._getRecommend()
  },
  computed: {
    showList () {
      if (this.$store.state.cartList.length) {
        return this.$store.state.cartList
      }
    }
  },
  methods: {
    // 0. 导入actions
    ...mapActions(['addCart']),
    // 1. 获取推荐信息
    _getRecommend () {
      getRecommend().then(res => {
        // console.log(res)
        this.recommendInfo = res.data.list
      })
    },
    // 2. 获取商品信息
    _getDetail () {
      // 获取路由传过来的iid
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
        const data = res.result
        // console.log(data)
        // 1. 获取轮播图
        this.topImages = data.itemInfo.topImages
        // 2. 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 3. 创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)
        // 4. 保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 5. 获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)  
        // 6. 获取评论信息
        data.rate.list && (this.commentInfo = data.rate.list[0])
        // 7. 获取推荐信息
      })
    },
    // 3. 用vue变量保存deounce函数
    _getDebounce (delay=300) {
      this.scrollRefresh = debounce(() => {
        this.$refs.scroll.refresh()
      }, delay)
      this.getCpnsOffsetTop = debounce(() => {
        this.cpnsOffsetTop = []
        this.cpnsOffsetTop.push(0)
        this.cpnsOffsetTop.push(this.$refs.param.$el.offsetTop - 44)
        this.cpnsOffsetTop.push(this.$refs.comment.$el.offsetTop - 44)
        this.cpnsOffsetTop.push(this.$refs.recommend.$el.offsetTop - 44)
        // this.cpnsOffsetTop.push(Number.MAX_VALUE)
        console.log(this.$refs.recommend.$el.offsetTop)
      }, delay)
    },
    // 4. 绑定goods图片加载对应的方法
    detailImgLoad () {
      // 因为把goodsInfo改成了时间总线所以把这里的刷新屏蔽掉
      // this.scrollRefresh()
      this.getCpnsOffsetTop()
      console.log(1)
    },
    // 5. nav被点击跳转
    navClick (index) {
      this.currentIndex = index
      // console.log(this.currentIndex)
      const scrollToY = -this.cpnsOffsetTop[this.currentIndex]
      // console.log(scrollToY)
      console.log(this.cpnsOffsetTop)
      this.$refs.scroll.scrollTo(0, scrollToY)
    },
    // 6. 监听滚动contentScroll
    contentScroll (y) {
      this.setNewIndex(y)
    },
    // 7. setNewIndex
    setNewIndex (y) {
      let newIndex = 0
      for (let i = 0; i < this.cpnsOffsetTop.length; i++) {
        if (y >= this.cpnsOffsetTop[i]) {
          newIndex = i
        }
      }
      this.$refs.navBar.currentIndex = newIndex
      this.currentIndex = newIndex
    },
    // 8. 添加到购物车
    addToCart () {
      // 1. 定义一个传过去的变量
      const obj = {}
      // 2. 为这个变量赋值
      obj.iid = this.iid
      obj.desc = this.goods.desc
      obj.title = this.goods.title
      obj.imgURL = this.topImages[0]
      obj.newPrice = this.goods.realPrice
      // this.$store.commit('addToCart', obj)
      this.addCart(obj).then(res => {
        this.$toast.show('已加入购物车')
      })
      // 3. 弹窗显示
      //  3.1 基本操作
      // this.$refs.toast.show('加入购物车', 300)
      //  3.2 插件操作
      // this.$toast.show('已加入购物车')
      // console.log(this.$toast)

    }
  },
  mounted () {
    this._getDebounce()
    // const newRefresh = debounce(this.$refs.scroll.refresh, 500)
    // this.imgLoadAndRefresh = () => {
    //   // debounce(this.$refs.scroll.refresh, 500)()
    //   newRefresh()
    // }
    // this.$bus.$on('imgLoad', this.imgLoadAndRefresh)

  },
  destroyed () {
    this.$bus.$off('imgLoad', this.imgLoadAndRefresh)
    console.log('detail的事件解绑了')
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
}
.content {
  /* height: calc(100% - 44px - 58px); */
  position: fixed;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>