<template>
  <div class="swipperItem">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "swipperItem",
  data() {
    return {};
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      paginationClickadle: true,
      observer: true,
      observeParents: true,
      autoplay: 3000,
      loop: true,
      speed: 1500,
      autoplayDisableOnInteraction: false, //滑动时继续自动播放
    });
  },
  methods: {},
};
</script>
<style scoped></style>
