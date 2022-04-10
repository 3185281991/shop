<template>
  <div class="tab-bar-item" @click="btnClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{ active: isActive }">
      <slot name="item-next"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    fsColor: {
      type: String,
      default: "coral",
    },
  },
  data() {
    return {};
  },
  methods: {
    btnClick() {
      //多次点击报错，添加catch
      this.$router.push(this.path).catch((err) => err);
    },
  },
  computed: {
    isActive() {
      //动态决定当前图标的颜色，根据积极路由中的path是否与当前path相等
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.active {
  color: coral;
  transition: 0.3s;
}
</style>
