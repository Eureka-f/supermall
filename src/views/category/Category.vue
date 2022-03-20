<template>
  <div class="category">
    <nav-bar class="category-navbar">
      <template #center>商品分类</template>
    </nav-bar>
    <div class="cate-content">
      <tab-menu :cate-gories="category" @item-click="itemClick" ></tab-menu>
      <scroll class="tab-content">
        <tab-content-category :sub-categories="showCategory" ></tab-content-category>
        </scroll>
    </div>
  </div>
</template> 

<script>
import NavBar from "components/common/navbar/NavBar";
import TabMenu from "./childCamps/TabMenu.vue";
import TabContentCategory from './childCamps/TabContentCategory.vue'
import Scroll from 'components/common/scroll/Scroll'

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    TabContentCategory,
    Scroll
  },
  data() {
    return {
      category: [],
      categoryData: {},
      currentIndex: -1
    };
  },

  created() {
    this.getCategory();
   
  },
 
  computed: {
    showCategory(){

      // return  this.categoryData[this.currentIndex].subcategory
      if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategory

      }
  },

  methods: {
    getCategory() {
      getCategory().then(res => {
        //获得商品种类数据
        this.category = res.data.category.list;
        //  console.log(res);

        // 初始化各类别的子项数据
        for (let i = 0; i < this.category.length; i++) {
          this.categoryData[i] = {
            subcategory: {},
            categorydetail: {
              'pop': [],
              'sell': [],
              'new': [],
            }
          }
        }
        // 进来显示的页面数据
        this.getSubcategory(0);
        console.log(this.currentIndex);
      });
    },

    getSubcategory(index) {
      this.currentIndex = index;
      // console.log(this.currentIndex);
      let maitKey = this.category[index].maitKey;
      // console.log(maitKey);
      getSubcategory(maitKey).then((res) => {
        this.categoryData[index].subcategory = res.data;
        // console.log(this.categoryData[index].subcategory);
        this.categoryData = {...this.categoryData}; //深拷贝，使得我们可以多次使用同样的数据，而不用担心数据之间会起冲突
      });
    },
    /*
  事件响应相关方法
  */
    itemClick(index) {
      this.getSubcategory(index);
      // console.log(index);
    },

  },
};
</script>

<style>

.category-navbar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}

.cate-content {
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
  overflow: hidden;
  
  display: flex;
}

.tab-content {
  flex: 1;
}
</style>