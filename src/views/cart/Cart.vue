<template>
  <div class="cart">
    <nav-bar class="cart-navbar">
      <template #center>购物车({{cartCount}})</template>
    </nav-bar>
    <cart-list v-if="cartCount"></cart-list>
    <div v-else class="kong">
      <p>购物车是空的哟（┬＿┬）</p>
      <button @click="buttonClick">去逛逛</button>
    </div>
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
    },
    methods: {
      buttonClick() {
        this.$router.replace('/home')
      }
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

.kong {
  position: fixed;
  top: 200px;
  left: 58px;
  font-size: 24px;
  color: #666;
  text-align: center;
}
.kong button {
  padding: 10px 20px;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 10px ;
  margin-left: -30px;
  cursor: pointer;
  background-color: var(--color-tint);
  border: #fff;
  color: #fff;
}

</style>