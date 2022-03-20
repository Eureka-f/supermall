<template>
  <div class="recommand">
    <div class="recommand-item" v-for="item in recommands" :key="item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommands: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommand{
  display: flex; 
  width: 100%;
  text-align: center;

  padding: 5px 0 5px;
  font-size: 20px;
  border-bottom: 10px solid #eee;
}

.recommand-item {
  flex: 1;
}  

.recommand-item img{
  width: 75px;
  height: 75px;
  margin-bottom: 8px;
} 

</style>