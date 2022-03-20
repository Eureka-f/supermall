<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tabControlfixed"
        v-show="isTabFixed"
      ></tab-control>
    <scroll class="home-content" 
    ref="scroll"
    :probe-type=3
     @scroll="contentScroll" 
     :pull-up-load="true"
     @pullingUp="loadMore" >
      <home-swiper :banners="banners" class="homeswiper"
      @swiperImageLoad="swiperImageLoad"
       ></home-swiper>
      <recommand-view :recommands="recommends"></recommand-view>
      <feature-view></feature-view>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommandView from "./childComps/RecommandView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodList from "components/content/goods/GoodList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/common/scroll/backTop.vue"

import bus from 'vue3-eventbus'
import{ ItemListenerMixin} from 'common/mixin'
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommandView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  mixins:[ItemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0 , //记录首页停留的位置
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
      
    },
  },
  destroyed(){
    console.log('destory');
  },
  activated(){

    // better-scroll如果子元素或者父元素 DOM 结构发生改变的时候,要重新调用一次refresh函数确保正常
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    // console.log('homeactive');
    // console.log(this.saveY);
  },
  deactivated(){
    //记录位置
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log('deactivated');

    //移除全局图片加载监听
    bus.off('ItemImageLoad',this.itemImgListener);
  },
  created() {
    this.getHomeMultidata();

   //home页一加载，就显示第一页
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // getHomeGoods("pop", 1).then((res) => {
    //   console.log(res);
    // });

  
  },
  mounted(){ 
    
  },

  methods: {
    /*事件监听方法
    
    */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
          //上划时，当前页面为刚才选中的界面
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
    },

    topClick(){
    //  console.log('click');
     this.$refs.scroll.scrollTo(0,0);//this.$ref.scroll对象，scrollTop是Scroll.vue封装的方法
    },

    contentScroll(position){
      //判断back-top是否出现
      this.isShowBackTop = (-position.y) > 1000//距离大于1000，出现回到顶部按钮

      //判断是否吸顶
      this.isTabFixed = (-position .y) > this.tabOffsetTop
    },

    loadMore(){
      this.getHomeGoods(this.currentType) 
      // console.log(this.currentType);
    },

    // 获取offsetTop值
    // 每个组件都有一个el属性，用于获取元素
    //需要轮播图加载完成才能计算出正确的offsetTop
    swiperImageLoad(){
     this.tabOffsetTop= this.$refs.tabControl2.$el.offsetTop;
    },


  //网络请求相关方法
    getHomeMultidata() {
      // 1.请求多个数据，包括轮播图等数据
      getHomeMultidata().then((res) => {
        // 保留下来，数据不会被销毁
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list); //把res.data.list存起来
        this.goods[type].page += 1; //新存了一组数据，页码要+1
        //  console.log(this.goods[type].list);
        this.$refs.scroll.finishPullUp(); //不加，不会刷新下组数据
      });
    }

  },

}
</script>

<style>
.home{
  position: relative;
  overflow: hidden;
  height: 100vh;
}
.home-nav {
  background-color:var( --color-tint);
  color:#fff;

  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 8;
}

.home-content{
  
  position:absolute;
  top: 44px;
  bottom: 50px;
  background-color: #fff;
}

.tabControlfixed{
  position:absolute;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 7;
}



</style>