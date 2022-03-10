<template>
  <div class="homeSwiper">
    <swipperItem>
      <div class="swiper-slide" v-for="(item, index) in infolist" :key="index">
        <a :href="item.link"
          ><img :src="item.image" alt="" @load="imageLoad"
        /></a></div
    ></swipperItem>
  </div>
</template>

<script>
import swipperItem from "components/common/swipper/swipperItem";
export default {
  name: "homeSwiper",
  data() {
    return { isLOad: false };
  },
  props: ["infolist"],
  methods: {
    imageLoad() {
      if (!this.isLOad) {
        //发送一次即可
        this.$emit("swiperImageLoad");
      }
      this.isLOad = true;
    },
  },
  components: { swipperItem },
};
</script>
<style scoped>
.swiper-slide {
  width: 100%;
}
a {
  width: 100%;
  height: 195px;
}
img {
  width: 100%;
  max-height: 100%;
  margin: auto;
}
</style>
