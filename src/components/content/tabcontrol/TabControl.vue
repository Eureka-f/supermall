<template>
  <div class="tab_control">
    <div v-for="(item,index) in title" :key="item" 
    class="tab-control-item"
    :class="{active:index === currentIndex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:{
      Type:Array,
      default(){
        return [ ]
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.tab_control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
  font-size: 18px;
  z-index: 8;
}

.tab-control-item{
  flex: 1;
}

.tab-control-item span{
  padding: 5px;
}

.active{
  color: deeppink;
}

.active span{
  border-bottom: 2px solid deeppink;
}
</style>