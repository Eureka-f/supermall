<template>
  <div class="tab-menu">
    <scroll class="tab-content">
      <div class="tab-list">
      <div class="tab-list-item" v-for="(item,index) in cateGories" :key="index"
      :class="{active:index === currentIndex}"
      @click="tabClick(index)">
          {{item.title}}
      </div>
    </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    props:{
      cateGories:{
        type:Array,
        default(){
          return []
        }
      },
    },
    components: {
      Scroll,
    },

    data() {
      return {
        currentIndex:0
      }
    },
    methods: {
      tabClick(index){
        this.currentIndex = index;
        this.$emit('itemClick',index)
        // console.log(index);
      }
    }
  }
</script>

<style>
.tab-menu {
  height: calc(100vh - 44px - 50px);
}
.tab-content{
  height:100%;
}
.tab-list{
  /* position: fixed;
  left: 0;
  top: 44px; */
  background-color: #f6f6f6;
  width: 100px;

}
.tab-list-item{
  height: 45px;
  line-height: 45px ;
  text-align: center;
}

.active{
  color: var(--color-high-text);
  background-color:#fff;
  border-left: 3px  solid var(--color-high-text);
}
</style>