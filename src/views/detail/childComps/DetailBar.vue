<template>
  <nav-bar>
    <template #left>
      <div  @click="back">
      <img src="~assets/img/common/back.svg" alt="">
      </div>
    </template>
    <template #center >
      <div class="title">
        <div class="title-item" 
        v-for="(item,index) in titles" :key="index" 
        :class="{titleactive:index === currentIndex}"
        @click="titleClick(index)">
          {{item}}
      </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  props:{
    currentIndex:{
      type:Number,
      default:0
    }

  },
  components:{
    NavBar
  },
  data(){
    return{
      titles:["商品","参数","评价","推荐"],
    }
  },
  methods:{
    
    titleClick(index){
      this.$emit('titleClick',index)
    },
    //导航箭头返回前一页
    back(){
      this.$router.back()
    }
  }
}
</script>

<style>
.title{
  display: flex;
}
.title-item{
  flex: 1;
}
.titleactive{
  color: var(--color-high-text);
  
}
.left{
  text-align: center;

}
.left img{
 vertical-align: middle;
}
</style>