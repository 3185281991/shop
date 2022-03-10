<template>
  <div class="detailSwiper">
    <swipperItem>
      <div class="swiper-slide" v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" /></div
    ></swipperItem>
  </div>
</template>

<script>
import swipperItem from "components/common/swipper/swipperItem";
export default {
  name: "detailSwiper",
  data() {
    return {};
  },
  props: ["topImages"],
  components: { swipperItem },
};
</script>
<style scoped>
.swiper-slide {
  width: 100%;
  height: 320px;
}
img {
  width: 100%;
  margin: auto;
}
</style>
