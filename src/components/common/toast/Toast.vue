<template>
   <div class="toast" v-show="isShow">
     {{message}}
   </div>
</template>

<script>
export default {
props: {
  // message: {
  //   type:String,
  //   default:''
  // },
  // isShow: {
  //   type:Boolean,
  //   default:false
  // }
},
data(){
 return{
   message: '',
   isShow: false
 }
},

methods: {
  show(message="默认文本",time=2000){
    this.isShow = true;
    this.message = message
    setTimeout(()=>{
      this.isShow = false;
      this.message = ''
    },time)
  }
}
}
</script>

<style>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform:translate( -50%,-50%);
  background-color:rgba(0,0,0,.6);
  z-index: 10;
  padding: 8px 10px;
  text-align: center;
  color: #fff;
  font-size: 18px;
}
</style>