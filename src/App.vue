<template>
  <div id="app">
    <!-- 详情页面不应该被缓存，否则每次点击的数据是一样的 -->
    <keep-alive exclude="detail"><router-view></router-view></keep-alive>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar.vue";
export default {
  name: "app",
  components: { MainTabbar },
};
</script>

<style>
@import "assets/css/base.css";
</style>
