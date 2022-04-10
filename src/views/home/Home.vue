<template>
  <div id="home">
    <navBar class="navbar"><div slot="center">购物街</div></navBar>
    <tabControl
      @tabclick="getIndex"
      ref="tabControl0"
      class="fixed"
      v-show="isTabFixed"
      :titles="['流行', '精选', '新款']"
    />
    <bsscroll
      class="scontent"
      ref="scroll"
      :probetype="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingup="loadMore"
    >
      <homeSwiper
        :infolist="banners"
        @swiperImageLoad="swiperImageLoad"
      ></homeSwiper>
      <recommed :recommedList="recommends"></recommed>
      <featrue />

      <tabControl
        @tabclick="getIndex"
        ref="tabControl1"
        :titles="['流行', '精选', '新款']"
      />
      <goodsList :goods="goods[currentType].lists" />
    </bsscroll>

    <backtop @click.native="backClick" v-show="isshow"></backtop>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar";
import bsscroll from "components/common/Scroll/scroll";

import tabControl from "components/content/tabControl";
import goodsList from "components/content/Goods/GoodsList";

import recommed from "views/home/homeView/recommed";
import featrue from "views/home/homeView/featrue";
import homeSwiper from "views/home/homeView/homeSwiper";

import { getHomeMultiData, getHomeGoods } from "network/home";

import { itemImgListener, backTop } from "@/common/mix.js";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, lists: [] },
        new: { page: 0, lists: [] },
        sell: { page: 0, lists: [] },
      },
      currentType: "pop",
      taboffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  components: {
    navBar,
    homeSwiper,
    recommed,
    featrue,
    tabControl,
    goodsList,
    bsscroll,
  },
  methods: {
    //商品类别分类点击
    getIndex(index) {
      switch (index) {
        case 0: {
          this.currentType = "pop";
          break;
        }
        case 1: {
          this.currentType = "new";
          break;
        }
        case 2: {
          this.currentType = "sell";
          break;
        }
      }
      //吸顶中的选项设置一致
      this.$refs.tabControl0.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },

    contentScroll(position) {
      //判断backtop是否显示

      this.isshow = -position.y > 500 ? true : false;
      //决定是否吸顶
      this.isTabFixed = -position.y > this.taboffsetTop;
    },
    //吸顶效果
    swiperImageLoad() {
      this.taboffsetTop = this.$refs.tabControl1.$el.offsetTop;
    },
    //上拉加载
    loadMore() {
      this.getGoods(this.currentType);
      // this.$refs.scroll.refresh();
      //重新计算可滚动区域高度
    },
    //数据请求
    getHomeData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        try {
          this.goods[type].lists.push(...res.data.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        } catch (e) {}
      });
    },
  },
  created() {
    //请求首页多个数据
    this.getHomeData();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  mixins: [itemImgListener, backTop],
  mounted() {},
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getSaveY();
    //离开首页后关闭首页的图片监听
    this.$bus.$off("itemImageLoad", this.itemimgListener);
  },
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.navbar {
  z-index: 20;
  background-color: pink;
}
.fixed {
  position: relative;
  width: 100%;
  z-index: 20;
  top: -1px;
}
.scontent {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>
