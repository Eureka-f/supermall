

export default{
  //购物车数量
  cartCount(state){
    return state.cartList.length
  },

  getcartList(state){
    return state.cartList
  },

  totalPrice(state){
    const cartList = state.cartList
    return cartList && cartList.filter(item => item.checked).reduce((price,item) =>{
      return price+item.price*item.count
    },0).toFixed(2)
  }
}