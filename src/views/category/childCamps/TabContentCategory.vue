<template>
  <div class="tab-content">
    <grid-view :cols="3" :line-space="15" :v-margin="20"  v-if="subCategories.list">
          <div  v-for="(item,index) in subCategories.list" :key="index" class="item">
            <a :href="item.link">
              <img :src="item.image" alt="" class="item-img">
              <div class="item-text">{{item.title}}</div>
            </a>
          </div>
          
    </grid-view>
  </div>
</template>

<script>
import GridView from 'components/common/grid/GridView'
export default {
  props: {
    subCategories: {
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {
    GridView
  }
}
</script>

<style>
.item {
  text-align: center;
}
.item-img {
  width: 60px;
  height: 60px;
}
.item-text {
  margin-top: 10px;
}
</style>