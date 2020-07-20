import { ADD_TO_CART, ADD_COUNT } from './mutations-types.js'

export default {
  addCart (context, payLoad) {
    return new Promise ((resolve, reject) => {
      const oldInfo = context.state.cartList.find(value => value.iid === payLoad.iid)
      if (oldInfo) {
        // oldInfo.count++
        context.commit(ADD_COUNT, oldInfo)
        resolve()
      } else {
        payLoad.count = 1
        payLoad.checked = true
        // state.cartList.push(payLoad)
        context.commit(ADD_TO_CART, payLoad)
        resolve()
      }
    })
  }
}

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
// }