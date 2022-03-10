<template>
  <div class="goodsItems" @click="goodsItemClick">
    <img v-lazy="goodsitems.show.img" alt="" @load="imageload" />
    <div class="goods-info">
      <p>{{ goodsitems.title }}</p>
      <span class="price">{{ goodsitems.price }}</span
      ><span class="collect">{{ goodsitems.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    goodsitems: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageload() {
      this.$bus.$emit("itemImageLoad");
    },
    //商品点击跳转详情
    goodsItemClick() {
      this.$router.push("/detail/" + this.goodsitems.iid);
    },
  },
};
</script>
<style scoped>
.goodsItems {
  width: 150px;
  padding-bottom: 27px;
  position: relative;
  height: 242px;
  margin-top: 5px;
}
.goodsItems img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: pink;
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/collect.svg") center center no-repeat;
}
</style>
