import{
  ADD_COUNTER,ADD_TO_CART
}from './mutation-types'

export default {
  //每个方法一般只完成一种操作，复杂的都放在actions中

   [ADD_COUNTER](state,payLoad){
     payLoad.count++
   },
   [ADD_TO_CART](state,payLoad){
     payLoad.checked = true;//购物车页面，物品前面的按钮默认是选中的
     state.cartList.push(payLoad)
   }

 }
