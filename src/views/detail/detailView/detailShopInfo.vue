<template>
  <div class="shopInfo">
    <div class="top">
      <img :src="shopInfo.logo" alt="" />
      <span class="name">{{ shopInfo.name }}</span>
    </div>
    <div class="self">
      <div class="left">
        <div class="cSells">
          <span>{{ (shopInfo.cSells / 10000).toFixed(1) }}万</span
          ><span>总销量</span>
        </div>
        <div class="cGoods">
          <span>{{ shopInfo.cGoods }}</span
          ><span>全部宝贝</span>
        </div>
      </div>
      <div class="right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.score }}</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    <a :href="shopInfo.shopUrl">进店逛逛</a>
  </div>
</template>

<script>
export default {
  name: "detailShopInfo",
  data() {
    return {};
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
.shopInfo {
  border-top: 10px solid rgba(0, 0, 0, 0.3);
  border-bottom: 10px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 225px;
}
.top {
  width: 100%;
  height: 80px;
  position: relative;
}
.top img {
  padding: 10px 10px;
  float: left;
  display: block;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.top span {
  float: left;
  display: block;
  height: 20px;
  line-height: 20px;
  font-size: 17px;
  margin-top: 30px;
}
.self {
  width: 100%;
  height: 100px;
}
.self .left {
  float: left;
  width: 48%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  border-right: 1px solid;
}
.left .cSells {
  width: 49%;
  position: relative;
}
.left .cSells span:nth-child(1) {
  font-weight: bold;
  position: absolute;
  top: 30%;
  left: 12%;
  display: block;
  font-size: 18px;
}
.left .cSells span:nth-child(2) {
  display: block;
  position: absolute;
  left: 25%;
  top: 61%;
}
.left .cGoods {
  position: relative;
  width: 49%;
}
.left .cGoods span:nth-child(1) {
  position: absolute;
  font-weight: bold;
  top: 30%;
  left: 20%;
  display: block;
  font-size: 18px;
}
.left .cGoods span:nth-child(2) {
  display: block;
  position: absolute;
  left: 14%;
  top: 61%;
}
.self .right {
  float: left;
  width: 50%;
  height: 100%;
  position: relative;
}
.right table {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 70%;
}
.right table tr {
  line-height: 20px;
  text-align: center;
}

a {
  width: 40%;
  display: block;
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 30%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
a:hover {
  cursor: pointer;
  color: coral;
}
</style>
