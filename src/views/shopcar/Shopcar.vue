<template>
  <div class="shopcar">
    <navBar class="navbar">
      <div slot="center">购物车({{ $store.getters.CartLength }})</div>
    </navBar>
    <scroll class="scontent" ref="scroll" :probetype="3">
      <shop-cart-item />
    </scroll>
    <cartCalc />
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar";
import ShopCartItem from "./shopcarViews/shopCartItem.vue";
import cartCalc from "./shopcarViews/cartCalc.vue";
import scroll from "components/common/Scroll/scroll";

export default {
  name: "Shopcar",
  data() {
    return {};
  },
  methods: {},
  components: { navBar, ShopCartItem, cartCalc, scroll },
  activated() {
    //添加新的数据后，滚动区高度需要刷新
    this.$refs.scroll.refresh();
  },
};
</script>
<style scoped>
.shopcar {
  position: relative;
  height: 100vh;
}
.navbar {
  position: fixed;
  width: 100%;
  z-index: 20;
  background-color: pink;
}
.scontent {
  /* overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
  background-color: coral; */
  position: relative;
  top: 45px;
  height: calc(100vh - 49px - 46px - 40px);
}
main {
  width: 100%;
  height: 100vh;
  background-color: antiquewhite;
  padding-bottom: 3px;
}
</style>
