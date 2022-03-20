<template>
  <swiper>
      <swiper-item v-for="item in banners" :key="item"> 
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad"> 
        </a>
      </swiper-item> 
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    props:{
      banners:{
       type: Array,
      // 默认值必须是一个函数
        default() {
          return []      
        }
      } 
    },
    data(){
      return{
        isLoad:false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
     
        imageLoad() {
          //只发出一次事件就可以了，所以加if
          if(!this.isLoad){
            this.$emit('swiperImageLoad') ;
            this.isLoad=true
          }
      }   
    }
  }
</script>

<style scoped>

</style>