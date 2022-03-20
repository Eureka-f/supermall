<template>
  <div class="paraminfo" v-if="Object.keys(paramInfo).length !==0">
    <table v-for="(table, index) in paramInfo.rules" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="(info, index) in paramInfo.info" :key="index">
        <td class="info-key">{{ info.key }}</td>
        <td class="info-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-image" v-if="Object.keys(paramInfo.image).length !==0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.paraminfo {
  padding: 15px 15px;
  border-bottom: 5px solid #f2f5f8;
}

.paraminfo table {
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
}

.paraminfo tr {
  height: 42px;
}

.paraminfo tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info{
  border-top: 1px solid rgba(100,100,100,.2);
}
.info-key {
  width: 95px;
}

.info-value{
  color: #eb4868;
}

</style>