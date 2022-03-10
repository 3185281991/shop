<template>
  <div class="kindsRight">
    <div class="flex">
      <!-- <div v-for="(item, index) in kinds" :key="index" class="item">
        <img src="" alt="" />
        <span>{{ item }}</span>
      </div> -->
      <div>
        <img src="~assets/img/loading.gif" alt="暂无图片" /><span>长袖</span>
      </div>
      <div>
        <img src="~assets/img/loading.gif" alt="暂无图片" /><span>长袖</span>
      </div>
      <div>
        <img src="~assets/img/loading.gif" alt="暂无图片" /><span>长袖</span>
      </div>
      <div>
        <img src="~assets/img/loading.gif" alt="暂无图片" /><span>长袖</span>
      </div>
      <div>
        <img src="~assets/img/loading.gif" alt="暂无图片" /><span>长袖</span>
      </div>
    </div>
  </div>
</template>

<script>
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
  components: {},
  methods: {},
};
</script>
<style scoped>
.kindsRight {
  width: 70%;
  float: left;
  height: 100vh;
}
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
.flex div {
  text-align: center;
  margin-top: 8px;
  width: 40%;
  height: 120px;
  background-color: aliceblue;
}
div img {
  margin-top: 2px;
  width: 80px;
  height: 80px;
}
div span {
  display: block;
  width: 40%;
  margin: 4px auto;
  font-size: 16px;
  text-align: center;
  line-height: 100%;
}
</style>
