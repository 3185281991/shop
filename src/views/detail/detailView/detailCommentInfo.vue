<template>
  <div class="comments" v-if="Object.keys(detailCommentInfo).length !== 0">
    <div class="top"><span>用户评价</span><a href="#">更多</a></div>

    <div class="user">
      <span class="img"
        ><img :src="detailCommentInfo.user.avatar" alt="" /></span
      ><span class="name">{{ detailCommentInfo.user.uname }}</span>
    </div>
    <div class="info">
      <span class="userinfo"> {{ detailCommentInfo.content }}</span>

      <span class="shopinfo"
        >{{ detailCommentInfo.created | changeData }}
        {{ detailCommentInfo.style }}</span
      >
      <span class="shopreturn"> {{ detailCommentInfo.explain }}</span>
    </div>
    <div class="under" v-if="detailCommentInfo.hasOwnProperty('images')">
      <div v-for="(item, index) in detailCommentInfo.images" :key="index">
        <img :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatData } from "@/common/utils.js";
export default {
  name: "detailCommentInfo",
  data() {
    return {};
  },
  props: {
    detailCommentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {},
  components: {},
  filters: {
    changeData(value) {
      let date = new Date(value * 1000);
      return formatData(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>
<style scoped>
.comments {
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;
}
.top {
  width: 90%;
  height: 40px;
  margin: 1px auto;
}
.top span {
  display: block;
  font-size: 16px;
  height: 40px;
  float: left;
  line-height: 40px;
  margin-left: 10%;
}
.top a {
  display: block;
  font-size: 16px;
  height: 40px;
  float: right;
  line-height: 40px;
  margin-right: 10%;
  text-decoration: none;
  color: black;
}
.user {
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  padding-top: 10px;
  width: 100%;
  height: 90px;
}
.user .img {
  margin-left: 10px;
  float: left;
}
.user img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.user .name {
  display: block;
  font-size: 18px;
  float: left;
  margin-top: 30px;
  margin-left: 10px;
  font-weight: bold;
}
.info {
  width: 95%;
  margin: 5px auto;
  overflow: hidden;
}
.info .userinfo {
  display: block;
  font-size: 14px;
  text-indent: 2em;
}
.info .shopinfo {
  display: block;
  margin: 5px auto;
  width: 80%;
  margin-top: 5px;
  color: rgb(103, 110, 116);
}
.info .shopreturn {
  display: block;
  margin-top: 5px;
  width: 99%;
  font-size: 13px;
}
.under {
  margin-top: 10px;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: hidden;
}
.under div {
  float: left;
  width: 33%;
  height: 100%;
  margin-left: 2px;
  justify-content: space-between;
}
.under div img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
