<template>
  <div class="shopItem">
    <div v-for="(item, index) in ItemLists" :key="index" class="item">
      <div class="left">
        <div class="input">
          <check
            class="check"
            :isActive="item.checked"
            @click.native="changeCheck(item)"
          />
        </div>
        <div class="img"><img :src="item.image" alt="" /></div>
      </div>
      <div class="right">
        <ul>
          <li>{{ item.title }}</li>
          <li>{{ item.desc }}</li>
          <li>
            <span>￥{{ item.price }}</span
            ><span>X{{ item.count }}件</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import check from "components/common/checkButton/check";
export default {
  name: "",
  data() {
    return {
      ItemLists: this.$store.state.cartList,
    };
  },
  methods: {
    changeCheck(item) {
      item.checked = !item.checked;
    },
  },
  components: { check },
};
</script>
<style scoped>
.shopItem {
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}
.item {
  padding-top: 2px;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
}
.left {
  width: 40%;
  height: 100%;
}
.left .input {
  float: left;
  width: 25%;
  height: 100%;
  position: relative;
}
.input .check {
  width: 26px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.left .img {
  float: right;
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.img img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
}
.right {
  width: 60%;
  height: 100%;
}
.right ul {
  width: 97%;
  height: 95%;
  margin: 2px auto;
}
.right ul li {
  list-style: none;
}
ul li {
  width: 98%;
  height: 25px;
  line-height: 25px;
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
ul li:nth-child(1) {
  margin: 0 auto;
  height: 30%;
  text-align: center;
}
ul li:nth-child(2) {
  margin: 0 auto;
  height: 30%;
  text-align: center;
}
ul li:nth-child(3) {
  height: 40%;
  display: flex;
  justify-content: space-around;
}
ul li:nth-child(3) span {
  display: block;
  text-align: center;
}
ul li:nth-child(3) span:nth-child(1) {
  width: 60px;
  font-size: 15px;
  color: orange;
  height: 40px;
  line-height: 40px;
}
ul li:nth-child(3) span:nth-child(2) {
  width: 40px;
  line-height: 40px;
  height: 40px;
  font-size: 15px;
}
</style>
