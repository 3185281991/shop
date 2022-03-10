<template>
  <div>
    <tabbar>
      <tabbar-item path="/home" fsColor="aqua">
        <img
          src="~img/tabbar/index.svg"
          alt="error"
          title="首页"
          slot="item-icon"
        />
        <img
          src="~img/tabbar/index1.svg"
          alt="error"
          title="首页"
          slot="item-icon-active"
        />
        <div slot="item-next">首页</div>
      </tabbar-item>
      <tabbar-item path="/kinds" fsColor="blue">
        <img
          src="~img/tabbar/kinds.svg"
          alt="error"
          title="分类"
          slot="item-icon"
        />
        <img
          src="~img/tabbar/kinds1.svg"
          alt="error"
          title="分类"
          slot="item-icon-active"
        />
        <div slot="item-next">分类</div>
      </tabbar-item>
      <tabbar-item path="/shopcar" fsColor="coral">
        <img
          src="~img/tabbar/shopcar.svg"
          alt="error"
          title="购物车"
          slot="item-icon"
        />
        <img
          src="~img/tabbar/shopcar1.svg"
          alt="error"
          title="购物车"
          slot="item-icon-active"
        />
        <div slot="item-next">购物车</div>
      </tabbar-item>
      <tabbar-item path="/user" fsColor="green">
        <img
          src="~img/tabbar/my.svg"
          alt="error"
          title="我的"
          slot="item-icon"
        />
        <img
          src="~img/tabbar/my1.svg"
          alt="error"
          title="我的"
          slot="item-icon-active"
        />
        <div slot="item-next">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/Tabbar.vue";
import tabbarItem from "components/common/tabbar/TabbarItem.vue";
export default {
  name: "MainTabbar",
  data() {
    return {};
  },
  components: {
    tabbar,
    tabbarItem,
  },
};
</script>
<style scoped></style>
