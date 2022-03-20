<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">       
      <div>
        <!-- i表示和其他文本不同的部分，html5中并没有特别样式  -->
         <i class="icon service" ></i>
          <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div> 
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div> 
    <div class="bar-item bar-right">
      <div class="car" @click="addToCart"> 加入购物车</div>
      <div class="buy"> 购买 </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addToCart(){
    // console.log('添加购物车');
      this.$emit('addToCart');
    }
  }
}
</script>

<style>
.bottom-bar {
  display: flex;
  background-color: #fff;
  height: 55px;
  /* position: relative;
  z-index: 10; */
  position :fixed;
  bottom: 0;
  left: 0;
  right: 0;

  text-align: center;
}

.bar-item {
  flex: 1;
  display: flex;
}

 /* >代表直接后代元素 */
.bar-left > div{ 
  flex: 1;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  margin: 10px auto 0px;
}
.bar-left .text {
  font-size: 13px;
}
.bar-left .service{
  background-position: 0 -55px;
}
.bar-left .shop {
  background-position: 0 -98px;
}

.bar-right{
  display: flex;
  text-align: center;
  line-height: 55px;

}
.bar-right >div{
  flex: 1;
}

.car {
  background-color: #ffe817;
  color:#000;
}

.buy {
 background-color: #f69;
 color: #fff;
}
</style>