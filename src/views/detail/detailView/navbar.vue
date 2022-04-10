<template>
  <div>
    <navBar class="navbar"
      ><div slot="left">
        <img src="~assets/img/return.png" alt="" @click="back" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          @click="itemClick(index)"
          :class="{ active: index == currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar";
export default {
  name: "denavbar",
  data() {
    return {
      titles: ["商品", "参数", "评价", "推荐"],
      currentIndex: 0,
    };
  },
  components: { navBar },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", this.currentIndex);
    },
    back() {
      this.$router.back(-1);
    },
  },
};
</script>
<style scoped>
.title {
  display: flex;
  justify-content: space-around;
}
img {
  width: 20px;
  height: 20px;
  padding-top: 10px;
}
.active {
  color: pink;
}
</style>
