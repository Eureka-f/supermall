<template>
  <div class="cart-bottom-bar" >
    <div class="left">
      <check-button class="check-button" :is-checked="isSelectAll"  @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="center">合计{{totalPrice}}</div>
    <div class="right">
      <div>结算({{cartCount}})</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CheckButton from './CheckButton.vue'

export default {
  components:{   
    CheckButton
  },
  computed:{
    ...mapGetters([
      'cartCount',
      'getcartList',
      'totalPrice'
    ]),

    isSelectAll() {
      if(this.getcartList.length === 0) return false
      return !this.getcartList.find(item => !item.checked)
    }
  },
  methods: {
    checkClick() {
      // console.log('clic-------');
      // 第一种方法
      if(this.isSelectAll){
         this.getcartList.forEach(item => item.checked=false);
      }else {
         this.getcartList.forEach(item => item.checked=true)
      }
      // 方法二不可行，因为isSelectAll是变化的
      // this.getcartList.forEach(item => item.checked = !this.isSelectAll);
    }
  }
};
</script>

<style>
.cart-bottom-bar{
  background-color: #eee;
  height: 45px;
  line-height: 45px;
  width: 100%;
  font-size: 14px;

  display: flex;
  position: fixed;
  bottom: 50px;
}

.cart-bottom-bar .left {
  display: flex;
  align-items: center;
  
}

 .left .check-button {
  margin-right: 5px;
  
}

.cart-bottom-bar .center {
  flex: 1;
  font-size: 16px;
  padding-left: 2px;
  text-align: left;
}

.cart-bottom-bar .right {
  background-color: orangered;
  width: 100px;
  color: #fff;
  text-align: center;
}
</style>