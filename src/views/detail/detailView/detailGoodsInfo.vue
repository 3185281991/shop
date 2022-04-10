<template>
  <div class="detailInfo" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">
      <span>{{ detailInfo.desc }}</span>
    </div>
    <div class="key">
      <span>{{ detailInfo.detailImage[0].key }}</span>
    </div>
    <div class="images">
      <div
        class="imageitem"
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
      >
        <img :src="item" alt="" @load="detailImgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  data() {
    return {
      counter: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    detailImgLoad() {
      this.$emit("detailImgLoad");
    },
  },
  components: {},
};
</script>
<style scoped>
.detailInfo {
  margin-top: 10px;
  width: 100%;
}
.desc {
  width: 100%;
  height: 50px;
}
.desc span {
  width: 95%;
  margin: 0 auto;
  display: block;
  font-size: 14px;
  text-indent: 1em;
  font-weight: bold;
}
.key {
  width: 100%;
  height: 20px;
  position: relative;
}
.key span {
  width: 95%;
  position: absolute;
  display: block;
  top: -7px;
  left: 7%;
  font-size: 13px;
  color: cadetblue;
}
.images {
  width: 100%;
  margin: 5px auto;
}
.imageitem {
  width: 100%;
}
.imageitem img {
  display: block;
  max-height: 100%;
  max-width: 100%;
  margin: 5px auto;
}
</style>
