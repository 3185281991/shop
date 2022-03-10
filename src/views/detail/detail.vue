<template>
  <div class="detail">
    <denavbar class="denavbar" @itemClick="itemClick" ref="nav" />
    <scroll class="scroll" ref="scroll" :probetype="3" @scroll="detailScroll">
      <detail-swiper :topImages="topImages" />
      <detailbaseInfo :goods="goods" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info
        :detailInfo="detailInfo"
        @detailImgLoad="detailImgLoad"
      />
      <detailGoodsParams :goodsParams="GoodsParams" ref="params" />
      <detailCommentInfo :detailCommentInfo="commentinFo" ref="comments" />
      <detailRecommend :recommendInfoList="recommendInfoList" ref="recommend" />
    </scroll>
    <backtop @click.native="backClick" v-show="isshow"></backtop>
    <detailBottonBar @addCart="addCart" />
  </div>
</template>

<script>
import {
  getDetailData,
  GoodsInfo,
  ShopInfo,
  GoodsParams,
  getRecommend,
} from "network/detail.js";
import { debounce } from "@/common/utils.js";
import { itemImgListener, backTop } from "@/common/mix.js";
import denavbar from "views/detail/detailView/navbar";
import detailSwiper from "views/detail/detailView/detailSwiper";
import detailbaseInfo from "views/detail/detailView/detailbaseInfo";
import detailShopInfo from "views/detail/detailView/detailShopInfo";
import detailGoodsInfo from "views/detail/detailView/detailGoodsInfo";
import detailGoodsParams from "views/detail/detailView/detailGoodsParams";
import detailCommentInfo from "views/detail/detailView/detailCommentInfo";
import detailRecommend from "views/detail/detailView/detailRecommend";
import detailBottonBar from "views/detail/detailView/detailBottonBar";
import scroll from "components/common/Scroll/scroll";
import { mapActions } from "vuex";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      GoodsParams: {},
      commentinFo: {},
      recommendInfoList: [],
      paramsTop: 0,
      themeTop: [],
      getThemeTop: null,
      currentIndex: 0,
    };
  },
  components: {
    denavbar,
    detailSwiper,
    detailbaseInfo,
    detailShopInfo,
    scroll,
    detailGoodsInfo,
    detailGoodsParams,
    detailCommentInfo,
    detailRecommend,
    detailBottonBar,
  },
  methods: {
    // ...mapActions(['addCart']),
    getDetail() {
      getDetailData(this.iid).then((res) => {
        const data = res.data.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shopInfo = new ShopInfo(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.GoodsParams = new GoodsParams(
          data.itemParams.info,
          data.itemParams.rule
        );
        this.commentinFo = data.rate.cRate !== 0 ? data.rate.list[0] : null;
      });
      //参数位置
      // this.$nextTick(() => {
      //   //此时部分只是dom渲染完成，图片并未加载，因此该部分的offsetTop错误
      //   this.themeTop = [];
      //   this.themeTop.push(0);
      //   this.themeTop.push(this.$refs.params.$el.offsetTop);
      //   this.themeTop.push(this.$refs.comments.$el.offsetTop);
      //   this.themeTop.push(this.$refs.recommend.$el.offsetTop);
      // });
    },
    getRecommendinfo() {
      getRecommend(this.iid).then((res) => {
        this.recommendInfoList = res.data.data.list;
      });
    },
    detailImgLoad() {
      this.newFresh();
      this.getThemeTop();
    },
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTop[index], 1000);
    },
    detailScroll(position) {
      this.isshow = -position.y > 1500 ? true : false;
      this.themeTop.push(Number.MAX_VALUE);
      const vertical = -position.y;
      const length = this.themeTop.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          vertical >= this.themeTop[i] &&
          vertical < this.themeTop[i + 1]
          //   i < length - 1 &&
          //   vertical >= this.themeTop[i] &&
          //   vertical < this.themeTop[i + 1]) ||
          // (i === length - 1 && vertical >= this.themeTop[i])
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    //添加购物车
    addCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.conDesc;
      product.price = this.goods.discount;
      product.iid = this.iid;
      this.$store.dispatch("addCart", product).then((res) => {
        //添加商品的弹窗信息
        this.$toast.show(res, 1500);
      });
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    //详情数据
    this.getDetail();
    //推荐数据
    this.getRecommendinfo();
    this.getThemeTop = debounce(() => {
      this.themeTop = [];
      this.themeTop.push(0);
      this.themeTop.push(this.$refs.params.$el.offsetTop);
      this.themeTop.push(this.$refs.comments.$el.offsetTop);
      this.themeTop.push(this.$refs.recommend.$el.offsetTop);
    }, 100);
  },
  mixins: [itemImgListener, backTop],
  mounted() {},

  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>
<style scoped>
.detail {
  height: 100vh;
  position: relative;
  background-color: #fff;
  z-index: 10;
}
.denavbar {
  width: 100%;
  position: fixed;
  z-index: 5;
  background-color: white;
}
.scroll {
  position: absolute;
  top: 45px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
