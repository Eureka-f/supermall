<template>
  <div class="detail">
    <detail-bar
      class="detail-bar"
      @titleClick="titleClick"
      :current-index="currentIndex"
    />
    <scroll
      class="detail-content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="ItemImage"> </detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods
        :goods-info="goodsinfo"
        @detailImgLoad="detailImgLoad"
      ></detail-goods>
      <detail-param-info
        :param-info="paraminfo"
        ref="param"
      ></detail-param-info>
      <detail-comments :comments="comments" ref="comments"></detail-comments>
      <good-list :goods="recommends" ref="recommend" />
    </scroll>
    <back-top @click.native="topClick" v-show="isShowTar" />
    <detail-bottom-bar @addToCart="addToCart" />
    <toast ></toast>
  </div>
</template>

<script>
import DetailBar from "./childComps/DetailBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShop from "./childComps/DetailShop.vue";
import DetailGoods from "./childComps/DetailGoods.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailComments from "./childComps/DetailComments.vue";
import GoodList from "components/content/goods/GoodList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import BackTop from "components/common/scroll/backTop.vue";
import Toast from "components/common/toast/Toast";

import bus from "vue3-eventbus";
import { getDetail, Goods, Shop, GoodsParams } from "network/detail";
import { getRecommend } from "network/recommend";
import { ItemListenerMixin } from "common/mixin";
import { debounce } from "common/utils";
import { mapActions } from "vuex";


export default {
  name: "Detail",
  components: {
    DetailBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailGoods,
    DetailParamInfo,
    DetailComments,
    GoodList,
    Scroll,
    DetailBottomBar,
    BackTop,
    Toast,
  },
  mixins: [ItemListenerMixin], //混入
  data() {
    return {
      id: null,
      ItemImage: [],
      goods: {},
      shop: {},
      goodsinfo: {},
      paraminfo: {},
      comments: {},
      recommends: [],
      detailimgListener: [],
      ThemeY: [],
      // getThemeY: null,
      currentIndex: 0,
      isShowTar: false,
      // message:'哈哈哈',
      // isShow:false
      // itemImgListener: [],用mixin
    };
  },
  created() {
    this.getDetail();
    
      //各title信息存入ThemeY，并用防抖函数
    this.getThemeY = debounce(() => {
        this.ThemeY = [];
        this.ThemeY.push(0);
        this.ThemeY.push(this.$refs.param.$el.offsetTop);
        this.ThemeY.push(this.$refs.comments.$el.offsetTop);
        this.ThemeY.push(this.$refs.recommend.$el.offsetTop);
        this.ThemeY.push(Number.MAX_SAFE_INTEGER);
        //  console.log(this.ThemeY);
      }, 100);

    this.getRecommend();   
  },
  mounted() {},
  destory() {
    //取消图片加载全局监听
    bus.off("ItemImageLoad", this.itemImgListener);
    //bus.off(事件名称，回调函数)
  },
  methods: {
    ...mapActions(["addCart"]),

    //图片监听，调用refresh函数，且已使用防抖（也minin了）
    detailImgLoad() {
      this.newrefresh();
      // console.log('detailload');

      //点参数、评价、推荐回到对应位置，必须在图片监听方法下调用，否则图片没加载完得到的数据就是错误的
      this.getThemeY();
      // console.log('ThemeY------');
    },

    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.ThemeY[index], 200); //y值是负数，要加-
    },

    contentScroll(position) {
      // console.log(position.y);
      this.isShowTar = -position.y > 1000;
      // console.log(this.isShowTar);

      //监听滚动到哪个主题
      this.ListenerTheme(-position.y);
    },

    getDetail() {
      //保存iid
      this.id = this.$route.params.iid;
      //根据iid请求数据
      getDetail(this.id).then((res) => {
        // console.log(res);
        const data = res.result;
        this.ItemImage = data.itemInfo.topImages;
        //获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        //获取商户信息
        this.shop = new Shop(data.shopInfo);
        //获取商品详细等
        this.goodsinfo = data.detailInfo;
        //获取尺寸信息
        this.paraminfo = new GoodsParams(
          data.itemParams.info,
          data.itemParams.rule
        );
        //评论信息
        if (data.rate.list) {
          this.comments = data.rate.list[0];
        }
      });
    },

    getRecommend() {
      //请求推荐数据
      getRecommend().then((res) => {
        // console.log(res);
        this.recommends = res.data.list;
      });
    },

    ListenerTheme(position) {
      let Tlength = this.ThemeY.length;
      for (let i = 0; i < Tlength-1; i++) {
        let Top = this.ThemeY[i];
        if (position >= Top && position < this.ThemeY[i+1]){
          //加一个判断是为了避免频繁执行赋值的问题
          if (this.currentIndex !== i) {
            this.currentIndex = i;
            // console.log(this.currentIndex);
          }
          break;
        }
      }
    },
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },

    addToCart() {
      // console.log('-----cart');
      // 获取购物车展示的信息
      const obj = {};
      obj.id = this.id;
      obj.desc = this.goods.desc;
      obj.img = this.ItemImage[0]; //要加[0]
      obj.price = this.goods.realPrice;
      obj.title = this.goods.title;

      //将商品添加到vuex中的state
      // this.$store.commit("addCart",obj)   //方法1：添加到getters里

      // this.$store.dispatch("addCart", obj).then(res =>{
      //   console.log(res);
      // });           //方法2：添加到actions中
      //方法3：通过mapActions映射
      this.addCart(obj).then((res) => {
        // console.log(res)
        // this.isShow = true;
        // this.message = res
        // setTimeout(() =>{
        //   this.isShow = false;
        //   this.message = ''
        // },1500)
       this.$toast.show(res,2000)
      });
    },
  },
};
</script>

<style>
.detail {
  position: relative;
  height: 100vh;
  z-index: 1;
  background-color: #fff;
  overflow: hidden; /* 设置之后就不能用滑轮滚动了 */
}
.detail-bar {
  background: #fff;
}
.detail-content {
  /* position: absolute;
 top: 44px;
 bottom: 42px; */
  height: calc(100% - 44px - 55px); /*减号两边必须要有空格 */
}
</style>