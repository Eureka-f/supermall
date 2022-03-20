<template>
  <div class="goodsinfo" v-if="Object.keys(goodsInfo).length !==0" >
    <div class="desc">
      <div class="desc-left"></div>
      <div class="desc-text">{{goodsInfo.desc}}</div>
      <div class="desc-right"></div>
    </div>
    <div class="info-key">
      {{goodsInfo.detailImage[0].key}}
    </div>
    <div class="img-list" v-for="item in goodsInfo.detailImage[0].list"  :key="item">
     <img :src="item" alt=""   @load="imgLoad"> 
    </div>

  </div>
</template>

<script>
  export default {
    props:{
      goodsInfo: {
        type:Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.$emit('detailImgLoad')
        // console.log('imgload----');
      }
    }
  }
</script>

<style>
.goodsinfo{
  margin: 20px 0;
}
.desc {
  padding: 0 10px;
}
.desc-left, .desc-right{
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative; 
}
.desc-left{
  float: left;
}
.desc-right{
  float: right;
}
/*小黑点 */
.desc .desc-left::before, .desc .desc-right::after {
  content: '';
  width: 5px;
  height: 5px;
  background: #000;
  position: absolute;
  bottom: 0;
}
.desc .desc-right::after{
  right: 0px;
}

.desc-text {
  padding: 15px 0; /*用margin会变成一行 */
  font-size: 14px;
}

.info-key {
  margin: 10px 10px;
}

.img-list img{
 max-width: 100%;
}
</style>