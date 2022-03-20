<template>
  <div class="cartlist" >
    <scroll class="cartlist-content" ref="scroll">
      <cart-list-item  
      v-for="item in getcartList" 
      :key="item.id" 
      :product = "item"
      >
      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll  from 'components/common/scroll/Scroll'

import { mapGetters } from 'vuex'
 import CartListItem from './CartListItem.vue'
export default {
  props:{
    
  },
  //刷新，避免出现scroll划不动的情况
  deactived() {
    this.$refs.scroll.refresh()
  },
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['getcartList'])
  }
}
</script>

<style>
.cartlist{
  height: calc(100% - 44px - 45px - 50px);
 overflow: hidden;
}
.cartlist-content{
  height: 100%;
}
</style>