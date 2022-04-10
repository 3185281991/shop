<template>
  <div class="GoodsParams" v-if="Object.keys(goodsParams).length !== 0">
    <span class="title">参数说明</span>
    <div class="info">
      <table>
        <tr v-for="(item, index) in goodsParams.set" :key="index">
          <td>{{ item.key }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
    </div>
    <div class="size">
      <table border="1">
        <tr v-for="(item, index1) in goodsParams.sizes[0]" :key="index1">
          <td v-for="(list, index2) in item" :key="index2">
            {{ list }}
          </td>
        </tr>
      </table>
      <span class="know">{{ goodsParams.know }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodsParams",
  data() {
    return {};
  },
  props: { goodsParams: { type: Object, default: {} } },
  methods: {},
  components: {},
};
</script>
<style scoped>
.GoodsParams {
  width: 100%;
  margin-top: 10px;
  background-color: azure;
}
.title {
  display: block;
  width: 40%;
  height: 20px;
  line-height: 20px;
  font-size: 13px;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
}
.info {
  width: 100%;
}
.info table {
  margin: 10px auto;
}
.info table tr {
  width: 80%;
}

.info table tr td:nth-child(1) {
  font-size: 13px;
  height: 30px;
  width: 35%;
  text-align: center;
  border-bottom: 1px solid rgb(97, 92, 93);
}
.info table tr td:nth-child(2) {
  font-size: 14px;
  width: 65%;
  text-align: center;
  color: pink;
  height: 30px;
  border-bottom: 1px solid rgb(97, 92, 93);
}
.size {
  width: 100%;
}
.size table {
  margin: 10px auto;
  width: 95%;
  text-align: center;
}

.size table tr td:nth-child(1) {
  font-size: 13px;
  height: 30px;
  width: 20%;
  text-align: center;
}
.size table tr td:nth-child(2) {
  font-size: 14px;
  width: 20%;
  height: 30px;
}
.size table tr td:nth-child(3) {
  font-size: 14px;
  width: 20%;
  height: 30px;
}
.size table tr td:nth-child(4) {
  font-size: 14px;
  width: 20%;
  height: 30px;
}
.size table tr td:nth-child(5) {
  font-size: 14px;
  width: 20%;
  height: 30px;
}
.know {
  width: 96%;
  height: 40px;
  display: block;
  margin: 5px auto;
  text-indent: 1em;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
}
</style>
