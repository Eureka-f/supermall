"use strict";(self["webpackChunksupermall"]=self["webpackChunksupermall"]||[]).push([[760],{7279:function(e,t,o){o.r(t),o.d(t,{default:function(){return q}});var s=o(3396),r=o(9242);const a={class:"home"},n=(0,s.Uk)("购物街");function i(e,t,o,i,l,c){const d=(0,s.up)("nav-bar"),m=(0,s.up)("tab-control"),u=(0,s.up)("home-swiper"),p=(0,s.up)("recommand-view"),h=(0,s.up)("feature-view"),g=(0,s.up)("good-list"),f=(0,s.up)("scroll"),w=(0,s.up)("back-top");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(d,{class:"home-nav"},{center:(0,s.w5)((()=>[n])),_:1}),(0,s.wy)((0,s.Wm)(m,{title:["流行","新款","精选"],onTabClick:c.tabClick,ref:"tabControl1",class:"tabControlfixed"},null,8,["onTabClick"]),[[r.F8,l.isTabFixed]]),(0,s.Wm)(f,{class:"home-content",ref:"scroll","probe-type":3,onScroll:c.contentScroll,"pull-up-load":!0,onPullingUp:c.loadMore},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{banners:l.banners,class:"homeswiper",onSwiperImageLoad:c.swiperImageLoad},null,8,["banners","onSwiperImageLoad"]),(0,s.Wm)(p,{recommands:l.recommends},null,8,["recommands"]),(0,s.Wm)(h),(0,s.Wm)(m,{title:["流行","新款","精选"],onTabClick:c.tabClick,ref:"tabControl2"},null,8,["onTabClick"]),(0,s.Wm)(g,{goods:c.showGoods},null,8,["goods"])])),_:1},8,["onScroll","onPullingUp"]),(0,s.wy)((0,s.Wm)(w,{onClick:c.topClick},null,8,["onClick"]),[[r.F8,l.isShowBackTop]])])}const l=["href"],c=["src"];function d(e,t,o,r,a,n){const i=(0,s.up)("swiper-item"),d=(0,s.up)("swiper");return(0,s.wg)(),(0,s.j4)(d,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.banners,(e=>((0,s.wg)(),(0,s.j4)(i,{key:e},{default:(0,s.w5)((()=>[(0,s._)("a",{href:e.link},[(0,s._)("img",{src:e.image,alt:"",onLoad:t[0]||(t[0]=(...e)=>n.imageLoad&&n.imageLoad(...e))},null,40,c)],8,l)])),_:2},1024)))),128))])),_:1})}var m=o(8080),u={props:{banners:{type:Array,default(){return[]}}},data(){return{isLoad:!1}},components:{Swiper:m.k,SwiperItem:m.t},methods:{imageLoad(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},p=o(89);const h=(0,p.Z)(u,[["render",d]]);var g=h,f=o(7139);const w={class:"recommand"},b=["href"],k=["src"];function v(e,t,o,r,a,n){return(0,s.wg)(),(0,s.iD)("div",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.recommands,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"recommand-item",key:e},[(0,s._)("a",{href:e.link},[(0,s._)("img",{src:e.image,alt:""},null,8,k),(0,s._)("p",null,(0,f.zw)(e.title),1)],8,b)])))),128))])}var C={props:{recommands:{type:Array,default(){return[]}}}};const T=(0,p.Z)(C,[["render",v]]);var y=T,L=o(8775);const _={class:"feature"},I=(0,s._)("a",{href:"https://act.mogujie.com/zzlx67"},[(0,s._)("img",{src:L,alt:""})],-1),S=[I];function x(e,t,o,r,a,n){return(0,s.wg)(),(0,s.iD)("div",_,S)}var H={};const W=(0,p.Z)(H,[["render",x]]);var $=W,Z=o(9176);const D={class:"tab_control"},G=["onClick"];function Y(e,t,o,r,a,n){return(0,s.wg)(),(0,s.iD)("div",D,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.title,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:(0,f.C_)(["tab-control-item",{active:t===a.currentIndex}]),onClick:e=>n.itemClick(t)},[(0,s._)("span",null,(0,f.zw)(e),1)],10,G)))),128))])}var F={props:{title:{Type:Array,default(){return[]}}},data(){return{currentIndex:0}},methods:{itemClick(e){this.currentIndex=e,this.$emit("tabClick",e)}}};const B=(0,p.Z)(F,[["render",Y]]);var j=B,z=o(8643),M=o(660),U=o(5636),A=o(1985),K=o(5095),O=o(7707);function P(){return(0,O.W)({url:"/home/multidata"})}function V(e,t){return(0,O.W)({url:"/home/data",params:{type:e,page:t}})}var N={components:{NavBar:Z.Z,HomeSwiper:g,RecommandView:y,FeatureView:$,TabControl:j,GoodList:z.Z,Scroll:M.Z,BackTop:U.Z},mixins:[K.y],data(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isShowBackTop:!1,tabOffsetTop:0,isTabFixed:!1,saveY:0}},computed:{showGoods(){return this.goods[this.currentType].list}},destroyed(){console.log("destory")},activated(){this.$refs.scroll.refresh(),this.$refs.scroll.scrollTo(0,this.saveY,0)},deactivated(){this.saveY=this.$refs.scroll.getScrollY(),A.Z.off("ItemImageLoad",this.itemImgListener)},created(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted(){},methods:{tabClick(e){switch(e){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=e,this.$refs.tabControl2.currentIndex=e},topClick(){this.$refs.scroll.scrollTo(0,0)},contentScroll(e){this.isShowBackTop=-e.y>1e3,this.isTabFixed=-e.y>this.tabOffsetTop},loadMore(){this.getHomeGoods(this.currentType)},swiperImageLoad(){this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata(){P().then((e=>{this.banners=e.data.banner.list,this.recommends=e.data.recommend.list}))},getHomeGoods(e){const t=this.goods[e].page+1;V(e,t).then((t=>{this.goods[e].list.push(...t.data.list),this.goods[e].page+=1,this.$refs.scroll.finishPullUp()}))}}};const R=(0,p.Z)(N,[["render",i]]);var q=R},8775:function(e,t,o){e.exports=o.p+"img/recommend_bg.a1646d5d.jpg"}}]);
//# sourceMappingURL=760.fc03c33c.js.map