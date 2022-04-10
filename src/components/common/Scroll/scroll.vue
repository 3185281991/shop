<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bscroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return { scroll: null };
  },
  props: {
    probetype: {
      //获得参数决定是否实时监听
      typr: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new bscroll(this.$refs.wrapper, {
      probeType: this.probetype,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingup");
      });
    }
  },
  methods: {
    scrollTo(x, y, ms = 300) {
      this.scroll && this.scroll.scrollTo(x, y, ms);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      //可滚高度由scrollHeight决定，即content盒子高度
      //通过监听每一张图片是否加载完成来刷新
      this.scroll && this.scroll.refresh();
    },
    getSaveY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>
<style scoped></style>
