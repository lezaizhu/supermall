import { ADD_TO_CART, ADD_COUNT } from './mutations-types'
 
export default {
  // 添加到购物车
  // addToCart (state, payLoad) {
  //   // console.log(payLoad)
  //   // 若已存在获取元素
  //   const oldInfo = state.cartList.find(value => value.iid === payLoad.iid)
  //   if (oldInfo) {
  //     oldInfo.count++
  //   } else {
  //     payLoad.count = 1
  //     payLoad.checked = true
  //     state.cartList.push(payLoad)
  //   }
  // },
  [ADD_COUNT] (state, cartItem) {
    cartItem.count++
  },
  [ADD_TO_CART] (state, cartItem) {
    state.cartList.push(cartItem)
  },
  // 点击选择/不选择
  changeChecked (state, payLoad) {
    const index = payLoad
    state.cartList[index].checked = !state.cartList[index].checked
  },
  // 检验是否全选
  checkAllSelector (state) {
    // 被选择的个数等于cartList.length的时候全选为true
    
    state.isCheckAll = (this.getters.getCheckLength === state.cartList.length)
  },
  // 选择全部
  changeSelectorAll (state) {
    state.isCheckAll = !state.isCheckAll
    state.cartList.map(value => {
      value.checked = state.isCheckAll
    })
  }
}