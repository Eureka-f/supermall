<template>
  <div class="good-list-item" @click="Itemclick" >
    <img v-lazy="getImg" alt="" @load="imgLoad"> 
     <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
import bus from 'vue3-eventbus'
export default {
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
   getImg() {
     //首页展示和推荐页展示，两者图片地址不一样
      return  this.goodsItem.image ||this.goodsItem.show.img 
    }
  },
  methods:{
    imgLoad(){
      // console.log(bus);
      bus.emit('ItemImageLoad')
    },

    Itemclick(){
      this.$router.push('/detail/'+ this.goodsItem.iid)
    }
  }

    

}
</script>

<style>

.good-list-item{
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.good-list-item img{
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left:0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  /* 规定段落中的文本不进行换行： */
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect{
  position: relative;
}

.goods-info .collect::before{
  content: '';
  position:absolute;
  left: -15px;/*相对于collect的位置来说 */
  top:-1px;
  width:14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/20px 14px;
  /* 第一个0代表背景颜色rgba(0,0,0,0) 
    第二个0代表background-position，背景图片的起始位置
    两个14px共同构成background-size，背景图片的大小。后一个14px可省略
  */
}
</style>