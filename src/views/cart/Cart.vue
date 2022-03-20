<template>
  <div class="cart">
    <nav-bar class="cart-navbar">
      <template #center>购物车({{cartCount}})</template>
    </nav-bar>
    <cart-list ></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'
  import CartList from './childComps/CartList.vue'

  import { mapGetters } from 'vuex'
  export default {
    name: "Cart",
    components:{
     NavBar,
     CartBottomBar,
     CartList
    },
    computed: {
      ...mapGetters([
        'cartCount',
      ])
    }
  };
</script>

<style>
.cart {
  height: 100vh;
}
.cart-navbar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>