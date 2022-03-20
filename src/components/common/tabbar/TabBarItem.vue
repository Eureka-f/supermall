<template>
   <div class="tab-bar-item" @click="itemClick" >
     <div v-if="!isActive"> <slot  name="item-icon"></slot> </div>
     <div v-else> <slot  name="item-icon-active"></slot> </div>
     <!-- 类要绑定在div上，如果绑定在slot上会被app.vue里的内容替换掉，就不会有active类 -->
    <div :style="activeStyle">
     <slot  name="item-text"></slot>
    </div>
   </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path:String,
    activeColor: {
      type:String,
      default: 'red'
    }
  },
  data() {
    return{
      // isActive:true
    }
  },
  computed: {
    isActive(){
      //$route.path是当前活跃组件的路径
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  //注意methods，有s
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
 
  .tab-bar-item {
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    widows: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  /* .active{
    color: red;
  } */
</style>