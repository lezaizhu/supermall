export default {
  // 获取商品数量
  getCartLength (state) {
    return state.cartList.length
  },
  // 获取已选的商品数量
  getCheckLength (state) {
    let count = 0
    count = state.cartList.filter(value => {
      return value.checked
    }).length
    return count
  }
}