<template>
  <div v-if="Object.keys(goods).length !== 0" class="baseInfo">
    <span class="infoTitle">{{ goods.title }}</span>
    <div class="infoPrice">
      <span class="nPrice">{{ goods.newPrice }}</span>
      <span class="oPrice">{{ goods.oldPrice }}</span>
      <span v-if="goods.desc" class="desc">{{ goods.desc }}</span>
    </div>
    <div class="infoOther">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="infoService">
      <span
        class="serviceItem"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "detailbaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
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
.baseInfo {
  margin-top: 2px;
  width: 100%;
  height: 163px;
  background-color: rgba(0, 0, 0, 0.1);
}
.infoTitle {
  display: block;
  width: 100%;
  font-size: 14px;
  text-align: center;
  padding-top: 5px;
}
.infoPrice {
  width: 94%;
  margin: 10px auto;
  height: 30px;
}
.infoPrice .nPrice {
  float: left;
  display: block;
  height: 40px;
  line-height: 35px;
  font-size: 18px;
  color: pink;
}
.infoPrice .oPrice {
  text-decoration: line-through;
  display: block;
  margin-left: 7px;
  float: left;
  height: 40px;
  line-height: 35px;
}
.infoPrice .desc {
  position: relative;
  top: 3px;
  left: 4px;
  font-size: 8px;
  color: pink;
  border-radius: 15px;
}
.infoOther {
  border-bottom: 1px solid rgb(91, 206, 235);
  width: 100%;
  display: flex;
  padding-bottom: 5px;
  justify-content: space-around;
}
.infoOther span {
  color: rgb(145, 166, 184);
}
.infoService {
  margin: 20px auto;
  width: 95%;
  display: flex;
  justify-content: space-between;
}
.infoService span {
  font-size: 13px;
}
.infoService span img {
  width: 10xp;
  height: 10px;
}
</style>
