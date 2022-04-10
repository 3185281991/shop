<template>
  <div class="kindsRight">
    <scroll class="scontent" :probetype="3" :pullUpLoad="true" ref="scroll">
      <div class="flex">
        <div v-for="(item, index) in kinds" :key="index" class="item">
          <a :href="item.link">
            <img v-lazy="item.image" alt="" @load="imageload" />
            <span>{{ item.title }}</span>
          </a>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "@/components/common/Scroll/scroll.vue";
import { itemImgListener } from "@/common/mix.js";
export default {
  name: "kindsRight",
  data() {
    return {};
  },
  props: {
    kinds: {
      type: Array,
    },
  },
  mixins: [itemImgListener],
  components: { scroll },
  methods: {
    imageload() {
      this.$bus.$emit("itemImageLoad");
    },
  },
  deactivated() {
    //离开首页后关闭首页的图片监听
    this.$bus.$off("itemImageLoad", this.itemimgListener);
  },
  watch: {
    //监听数据变化返回顶部
    kinds() {
      this.$refs.scroll.scrollTo(0, 0, 1500);
    },
  },
};
</script>
<style scoped>
.kindsRight {
  width: 70%;
  float: left;
  height: 100vh;
  position: relative;
}
.scontent {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 110px;
}
.flex {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
}
.flex div {
  text-align: center;
  margin-top: 8px;
  width: 40%;
  height: 120px;
}
div img {
  margin-top: 2px;
  width: 80px;
  height: 80px;
}
div span {
  display: block;
  width: 100%;
  margin: 4px auto;
  font-size: 12px;
  text-align: center;
  line-height: 100%;
}
</style>
