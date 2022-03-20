<template>
  <div class="cart-list-item">
      <div class="button">
        <check-button :is-checked="product.checked" @click.native="checkClick"></check-button>
      </div>
      <div class="item-img">
        <img :src="product.img" alt="商品图片">
      </div>
      <div class="item-info">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">商品描述{{product.desc}}</div>
        <div class="item-bottom">
          <div class="item-price left">￥{{product.price}}</div>
          <div class="item-count right">x{{product.count}}</div>
         </div>
      </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton.vue'
  export default {
    props: {
      product: {
        Type:Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton,
    },
    methods: {
      checkClick(){
        this.product.checked = !this.product.checked
      }
    
    }
  }
</script>

<style>
.cart-list-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.button{
 display: flex;
 justify-content: center  ;
 align-items: center;/*水平居中 */
}

.item-img  {
  padding: 2px 8px;
}
.item-img img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  overflow: hidden;
  font-size: 18px;
  padding: 5px 10px;
  color: #333;
  position: relative;/*为了设置下面的item-bottom的定位 */
}
.item-title, .item-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
}

.item-desc {
  font-size: 14px;
  margin-top: 15px;
}

.cart-list-item .item-bottom {
  margin-top: 15px;
  position: absolute;
  bottom: 8px;
  left:10px;
  right:0px;
}
.item-price{
  color: orange;
  font-weight: 700;
}
</style>