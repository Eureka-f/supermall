<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    cols:{
      type:Number,
      default: 2
    },
    vMargin: {
      type:Number,
      default:8
      //grid上下padding
    },
    hMargin: {
      type:Number,
      default:8
      //grid的左右padding
    },
    itemSpace: {
      type:Number,
      default:8
    },
    lineSpace: {
      type:Number,
      default:8
    }
  },
 
  mounted() {
      setTimeout(this.autoLayout(),200)
     
  },
  methods: {
    autoLayout(){
      let gridEI = this.$refs.gridView;
      let children = gridEI.children;
    
      // 设置内边距
      gridEI.style.padding = `${this.vMargin}px ${this.hMargin}px`
      // 计算item宽度
      let itemWidth =(gridEI.clientWidth - 2 * this.hMargin - (this.cols - 1) * this.itemSpace) / this.cols; 
      
      for(let i=0;i< children.length;i++){
       let item =children[i];

       item.style.width = itemWidth + 'px';

       if((i+1) % this.cols !== 0){
        item.style.marginRight = this.itemSpace+'px';
       }

        if(i >= this.cols){
          item.style.marginTop = this.lineSpace+'px'
        }
      }
    }
  }
}
</script>

<style>
.grid-view{
  display: flex;
  flex-wrap: wrap;
}
</style>