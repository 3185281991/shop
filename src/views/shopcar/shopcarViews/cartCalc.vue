<template>
  <div class="cartCalc">
    <div class="all">
      <div class="cz">
        <check
          class="check"
          @click.native="checkClick"
          :isActive="isSelectAll"
        />
        <span>全选</span>
      </div>
    </div>
    <div class="total">
      <span>合计</span> <span>{{ $store.getters.totalPrice }}元</span>
    </div>
    <div class="right">
      <span @click="allClick">去结算({{ $store.getters.checkLength }})</span>
    </div>
  </div>
</template>

<script>
import check from "components/common/checkButton/check";
export default {
  name: "cartCalc",
  data() {
    return {
      list: this.$store.state.cartList,
    };
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        //全选按钮全部选择
        this.list.forEach((element) => {
          element.checked = false;
        });
      } else {
        //未全部选中
        this.list.forEach((element) => {
          element.checked = true;
        });
      }
    },
    allClick() {
      if (this.$store.getters.checkLength == 0) {
        //弹框信息
        this.$toast.show("请选择商品！");
      }
    },
  },
  computed: {
    isSelectAll() {
      //商品全部选中以该改变全选按钮状态
      if (this.list.length === 0) return false;
      //存在全部选中就全选，否则存在未选就不选
      return !this.list.filter((item) => !item.checked).length;
    },
  },

  components: { check },
};
</script>
<style scoped>
.cartCalc {
  position: fixed;
  bottom: 52px;
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
}
.all {
  position: relative;
  width: 30%;
  height: 100%;
}
.all .cz {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
}
div .check {
  float: left;
  width: 26px;
}
.all span {
  font-size: 15px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
}
.total {
  width: 40%;
  height: 100%;
  position: relative;
}
.total span {
  position: absolute;
}
.total span:nth-child(1) {
  display: block;
  top: 50%;
  transform: translateY(-50%);
}
.total span:nth-child(2) {
  font-weight: bold;
  display: block;
  top: 50%;
  left: 22%;
  transform: translateY(-50%);
}
.right {
  width: 30%;
  height: 100%;
  background-color: coral;
  position: relative;
}
.right span {
  text-align: center;
  width: 100%;
  display: block;
  font-size: 15px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
