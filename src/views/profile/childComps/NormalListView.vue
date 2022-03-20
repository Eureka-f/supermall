<template>
  <div class="normallist">
    <div class="item" v-for="(item,index) in listData" :key="index">
      <span class="itemicon"><img :src="iconURL(item)" alt=""></span>
      <span class="iteminfo">{{item.info}}</span>
    </div>
    
  </div>
</template>

<script>
  export default {
    props: {
      listData: {
        type:Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      iconURL(item){
        return require("assets/img/profile/" + item.icon)
      }
    }
  }
</script>

<style>
.normallist {
  border-top: 15px solid rgba(100, 100, 100, .1);
  /* border-bottom: 15px solid rgba(100, 100, 100, .1); */
}
.normallist .item {
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.item:last-of-type {
  border: none;
}
.normallist .itemicon {
  margin-left: 20px;
}
.normallist .itemicon img{
  height: 20px;
  width: 20px;
  vertical-align: middle;
}
.iteminfo {
  margin-left: 10px;
  font-size: 14px;
}
</style>