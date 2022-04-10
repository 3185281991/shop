<template>
  <div class="detailBottonBar">
    <div class="left">
      <div>
        <img src="~assets/img/shop/sever.svg" alt="" /><span>客服</span>
      </div>
      <div><img src="~assets/img/shop/shop.svg" alt="" /><span>店铺</span></div>
      <div>
        <img src="~assets/img/shop/collection.svg" alt="" /><span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="shopcar" @click="addCart"><span>加入购物车</span></div>
      <div class="purchase"><span>购买</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottonBar",
  data() {
    return {};
  },
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
  components: {},
};
</script>
<style scoped>
.detailBottonBar {
  position: absolute;
  width: 100%;
  height: 49px;
  bottom: 0;
  background-color: #fff;
}
.left {
  width: 50%;
  float: left;
  display: flex;
  justify-content: space-around;
}
.left div {
  position: relative;
}
.left img {
  width: 30px;
  height: 30px;
}
.left span {
  position: absolute;
  display: block;
  text-align: center;
}
.right {
  width: 50%;
  float: left;
  overflow: hidden;
  height: 100%;
}
.shopcar {
  width: 50%;
  float: left;
  background-color: yellow;
  height: 100%;
  position: relative;
}
.purchase {
  width: 50%;
  float: left;
  background-color: pink;
  height: 100%;
  position: relative;
}
.right span {
  width: 100%;
  text-align: center;
  display: block;
  font-size: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
