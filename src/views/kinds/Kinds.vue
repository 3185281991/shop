<template>
  <div class="category">
    <navbar class="navbar"><div slot="center">商品分类</div></navbar>
    <scroll class="scroll"
      ><kindsLeft :list="categoryList" @itemClick="itemClick" />
      <kindsRight :kinds="rightInfo" />
    </scroll>
  </div>
</template>

<script>
import { getCategory } from "network/category";
import navbar from "components/common/navbar/navBar";
import kindsLeft from "views/kinds/kindsViews/kindsLeft";
import kindsRight from "views/kinds/kindsViews/kindsRight";
import scroll from "components/common/Scroll/scroll";
export default {
  name: "Kinds",
  data() {
    return {
      categoryList: [],
      rightInfo: [],
    };
  },
  components: { navbar, kindsLeft, kindsRight, scroll },
  mounted() {
    getCategory().then((res) => {
      const list = res.data.data.category.list;
      this.categoryList = list;
    });
  },
  methods: {
    itemClick(index) {
      //根据左边导航部分点击时传递的参数，找到对应分类部分的数据，传递给右边部分
      // this.rightInfo=''
    },
  },
};
</script>
<style scoped>
.category {
  height: 100vh;
  position: relative;
}
.navbar {
  width: 100%;
  position: fixed;
  z-index: 20;
  background-color: pink;
}
.scroll {
  width: 100%;
  position: absolute;
  top: 44px;
  bottom: 51px;
}
</style>
