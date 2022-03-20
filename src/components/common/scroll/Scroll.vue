<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
 

  export default {
    props:{
      probeType:{
        Type:Number,
        default:0
      },
      pullUpLoad:{
        Type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll:null
      }
    },

    mounted(){

      //1.创建BScroll对象
       this.scroll = new  BScroll(this.$refs.wrapper,{
         probeType:this.probeType,
         pullUpLoad:this.pullUpLoad,
         click:true
       })

      //2.实时监听滚动位置，“回到顶部”处需要
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position) =>{
        //  console.log(position);
        this.$emit('scroll',position)//自定义事件scroll
       })
      }
       
      //3.监听滚到底部，“上拉加载更多”时使用
      if(this.pullUpLoad){
         this.scroll.on ('pullingUp',() => {
          this.$emit('pullingUp')
          // console.log('上拉加载更多');
      })
      }
     
    },
    methods:{

      //位置（x，y），设置的默认时间为500
      scrollTo(x,y,time=500){
        this.scroll.scrollTo(x,y,time)
      },

      finishPullUp(){
        this.scroll.finishPullUp();
      },

      refresh(){
        // console.log('------32---');
        this.scroll && this.scroll.refresh();
      },

      getScrollY(){
        // bscroll有y这个属性，是bs 纵轴坐标。
       return this.scroll ? this.scroll.y :0
      }
    }
  }
</script>

<style>
</style>