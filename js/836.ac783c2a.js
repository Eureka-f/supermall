"use strict";(self["webpackChunksupermall"]=self["webpackChunksupermall"]||[]).push([[836],{5095:function(t,e,n){n.d(e,{y:function(){return r}});var i=n(4493),s=n(1985);const r={data(){return{itemImgListener:null,newrefresh:null}},mounted(){this.newrefresh=(0,i.D)(this.$refs.scroll.refresh,100),this.itemImgListener=()=>{this.newrefresh()},s.Z.on("ItemImageLoad",this.itemImgListener)}}},4493:function(t,e,n){function i(t,e){let n=null;return function(...i){n&&clearTimeout(n),n=setTimeout((()=>{t.apply(this,i)}),e)}}function s(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));let n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(let i in n)if(new RegExp(`(${i})`).test(e)){let t=n[i]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?t:r(t))}return e}function r(t){return("00"+t).substr(t.length)}n.d(e,{D:function(){return i},p:function(){return s}})},8080:function(t,e,n){n.d(e,{k:function(){return d},t:function(){return m}});var i=n(3396),s=n(7139);const r={id:"hy-swiper"},o={class:"indicator"};function c(t,e,n,c,l,u){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",{class:"swiper",onTouchstart:e[0]||(e[0]=(...t)=>u.touchStart&&u.touchStart(...t)),onTouchmove:e[1]||(e[1]=(...t)=>u.touchMove&&u.touchMove(...t)),onTouchend:e[2]||(e[2]=(...t)=>u.touchEnd&&u.touchEnd(...t))},[(0,i.WI)(t.$slots,"default",{},void 0,!0)],32),(0,i._)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.slideCount,((e,n)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,s.C_)(["indi-item",{active:n===t.currentIndex-1}]),key:n},null,2)))),128))])])}var l={name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){setTimeout((()=>{this.handleDom(),this.startTimer()}),3e3)},methods:{startTimer:function(){this.playTimer=window.setInterval((()=>{this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){window.setTimeout((()=>{this.swiperStyle.transition="0ms",this.currentIndex>=this.slideCount+1?(this.currentIndex=1,this.setTransform(-this.currentIndex*this.totalWidth)):this.currentIndex<=0&&(this.currentIndex=this.slideCount,this.setTransform(-this.currentIndex*this.totalWidth)),this.$emit("transitionEnd",this.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform=`translate3d(${t}px, 0, 0)`,this.swiperStyle["-webkit-transform"]=`translate3d(${t}px), 0, 0`,this.swiperStyle["-ms-transform"]=`translate3d(${t}px), 0, 0`},handleDom:function(){let t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){let n=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;let e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){let e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}},u=n(89);const a=(0,u.Z)(l,[["render",c],["__scopeId","data-v-29e6a968"]]);var d=a;const h={class:"slide"};function A(t,e,n,s,r,o){return(0,i.wg)(),(0,i.iD)("div",h,[(0,i.WI)(t.$slots,"default")])}var f={name:"Slide"};const v=(0,u.Z)(f,[["render",A]]);var m=v},5636:function(t,e,n){n.d(e,{Z:function(){return h}});var i=n(3396),s=n(128);const r={class:"back-top"},o=(0,i._)("img",{src:s,alt:""},null,-1),c=[o];function l(t,e,n,s,o,l){return(0,i.wg)(),(0,i.iD)("div",r,c)}var u={},a=n(89);const d=(0,a.Z)(u,[["render",l]]);var h=d},8643:function(t,e,n){n.d(e,{Z:function(){return g}});var i=n(3396);const s={class:"goods-list"};function r(t,e,n,r,o,c){const l=(0,i.up)("good-list-item");return(0,i.wg)(),(0,i.iD)("div",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.goods,((t,e)=>((0,i.wg)(),(0,i.j4)(l,{"goods-item":t,key:e},null,8,["goods-item"])))),128))])}var o=n(7139);const c={class:"goods-info"},l={class:"price"},u={class:"collect"};function a(t,e,n,s,r,a){const d=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)("div",{class:"good-list-item",onClick:e[1]||(e[1]=(...t)=>a.Itemclick&&a.Itemclick(...t))},[(0,i.wy)((0,i._)("img",{alt:"",onLoad:e[0]||(e[0]=(...t)=>a.imgLoad&&a.imgLoad(...t))},null,544),[[d,a.getImg]]),(0,i._)("div",c,[(0,i._)("p",null,(0,o.zw)(n.goodsItem.title),1),(0,i._)("span",l,(0,o.zw)(n.goodsItem.price),1),(0,i._)("span",u,(0,o.zw)(n.goodsItem.cfav),1)])])}var d=n(1985),h={props:{goodsItem:{type:Object,default(){return{}}}},computed:{getImg(){return this.goodsItem.image||this.goodsItem.show.img}},methods:{imgLoad(){d.Z.emit("ItemImageLoad")},Itemclick(){this.$router.push("/detail/"+this.goodsItem.iid)}}},A=n(89);const f=(0,A.Z)(h,[["render",a]]);var v=f,m={components:{GoodListItem:v},props:{goods:{type:Array,default(){return[]}}}};const p=(0,A.Z)(m,[["render",r]]);var g=p},128:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=836.ac783c2a.js.map