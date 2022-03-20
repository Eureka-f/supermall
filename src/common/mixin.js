import {debounce}from 'common/utils.js'
import bus from 'vue3-eventbus'


export const ItemListenerMixin = {
  data(){
    return{
      itemImgListener: null,
      newrefresh: null
    }
  },
  mounted(){
    //防抖
    this.newrefresh = debounce(this.$refs.scroll.refresh,100)
    // 监听item中图片加载完成,不能放在created里，因为在create时this.$refs.scroll可能为空
    this.itemImgListener = () =>{
      this.newrefresh() ;  
      }
    bus.on('ItemImageLoad',this.itemImgListener)   
    //ItemImageLoad事件是goodsItem发出的
    // console.log('mixin加载');
  }
}

