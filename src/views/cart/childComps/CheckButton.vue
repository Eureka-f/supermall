<template>
 <div class="check-button">
    <img src="~assets/img/cart/tick.svg" alt="" :class="{check:isChecked}">   
 </div>
</template>

<script>
export default {
  props: {
   isChecked:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return{
     
    }
  }
}
</script>

<style>
.check-button {
  font-size: 0;
  width: 18px;
  height: 18px;
  position: relative;
  border-radius: 50%;
  border: 2px solid #ccc;
   /* margin: 0; */
}
.check-button img {
  display: block;
}
.check {
  background-color: red;
  border-radius: 50%;
}
</style>