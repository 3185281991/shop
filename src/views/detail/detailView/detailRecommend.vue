<template>
  <div class="detailRecommend">
    <div
      class="recommend"
      v-for="(item, index) in recommendInfoList"
      :key="index"
    >
      <div class="recommendItems">
        <img v-lazy="item.image" alt="" @load="imageload" />
        <div class="item-info">
          <p>{{ item.title }}</p>
          <span class="discountPrice">折扣价{{ item.discountPrice }}</span>
          <span class="price">原价{{ item.price }}</span>
          <span class="collect">{{ item.cfav }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailRecommend",
  data() {
    return {};
  },
  props: {
    recommendInfoList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageload() {
      this.$bus.$emit("itemImageLoad");
    },
  },
  components: {},
  mounted() {},
};
</script>
<style scoped>
.detailRecommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.recommendItems {
  width: 150px;
  padding-bottom: 27px;
  position: relative;
  margin-top: 5px;
}
.recommendItems img {
  width: 100%;
  border-radius: 5px;
}
.item-info {
  font-size: 12px;
  text-align: center;
}
.item-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.item-info .discountPrice {
  display: block;
}
.item-info .price {
  color: pink;
  margin-right: 10px;
}
.item-info .collect {
  position: relative;
  margin-left: 10px;
}
.item-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/collect.svg") center center no-repeat;
}
</style>
