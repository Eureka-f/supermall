<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="shop-title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="middle-item shop-middle-left">
        <div class="sell">
          <!-- <div>{{shop.sell | sellCountFilter}}</div> -->
          <div class="item-count">{{sellCounter}}</div>
          <p class="item-text">总销量</p>
        </div>
        <div class="goodcount">
          <span class='item-count'>{{shop.goodcount}}</span>
          <p class="item-text">全部宝贝</p>
        </div>
      </div>
      <div class="middle-item shop-middle-right">
        <table >
          <tr v-for="item in shop.score" :key="item">
            <th>{{item.name}}</th>
            <td class="item-score" :class="{'isBetter': item.isBetter}"> {{item.score}}</td>
            <td :class="{'isBetter':item.isBetter}" >  {{ item.isBetter ? '高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="goshop">
        <p>进店逛逛</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      shop: {
        type:Object,
        defaule(){
          return {}
        }
      }
    },
    data() {
      return{
        sellcount: 0
      }
    },
    //vue2中用过滤器实现，vue3用计算属性实现
    // filters: {
    //   sellCountFilter: function(value) {
    //     if(value <10000) return value;
    //      return (value/10000).toFixed(1)+'万';
    //   }
    // }
    computed:{
      sellCounter(){
        this.sellcount = this.shop.sell
       if(this.sellcount <10000) return this.sellcount
        return (this.sellcount/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style>
.shop-info{
  padding: 25px 20px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top img{
  width: 45px;
  height: 45px;
  vertical-align: middle;
}

.shop-title{
  padding-left: 15px;

}

.shop-middle{
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.middle-item {
  flex: 1;
}

.shop-middle-left{
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, .1);
}

.item-count{
  font-size: 18px;
  color: #333;
}

.item-text {
  font-size: 12px;
  margin-top: 8px;
}

.shop-middle-right{
  font-size: 13px;
   color: #333;
   /* padding: 0 20px; */
}

.shop-middle-right table{
  width: 130px;
  margin-left: 25px;
}

.shop-middle-right table td{
  padding:5px 0 ;
}

.item-score{
  color: #5ea732;
}

.isBetter{
  color: red;
}

.shop-bottom{
  text-align: center;
}

.goshop{
  display: inline-block;/*div居中显示 */
  width: 150px;
  height: 30px;
  line-height: 30px;
  background-color: #f2f5f8;
  border-radius: 10px;
  margin-left: 30px;
  font-size: 14px;
  text-align: center;
}
</style>