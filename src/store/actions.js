
import {
  ADD_COUNTER, ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      let product = context.state.cartList.find(item => item.id === payLoad.id);
      if (product) {
        // product.count +=1
        context.commit(ADD_COUNTER, product)
        resolve("嘿，再加了一个！")
      } else {
        payLoad.count = 1;
        // state.cartList.push(payLoad)
        context.commit(ADD_TO_CART, payLoad)
        resolve("新品种Get！")
      }
    })
  }
}