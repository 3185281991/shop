<template>
  <div class="user">
    <div class="top">
      <div class="title">我的档案</div>
      <div class="main">
        <div class="img"><img src="~assets/img/user/user.svg" alt="" /></div>
        <div class="zc">
          <div>登录/注册</div>
          <div>
            <img src="~assets/img/user/phone.svg" alt="" /><span
              >暂无绑定手机号</span
            >
          </div>
        </div>
        <div class="last">></div>
      </div>
    </div>
    <div class="mine">
      <div>
        <div><span>0.00元</span><span>我的余额</span></div>
      </div>
      <div>
        <div><span>0个</span><span>我的优惠</span></div>
      </div>
      <div>
        <div><span>0分</span><span>我的积分</span></div>
      </div>
    </div>
    <div class="botton">
      <ul>
        <li><img src="~assets/img/user/info.svg" /><span>我的消息</span></li>
        <li>
          <img src="~assets/img/user/jifen.svg" alt="" /><span>我的积分</span>
        </li>
        <li>
          <img src="~assets/img/user/huiyuan.svg" alt="" /><span>会员卡</span>
        </li>

        <li>
          <img src="~assets/img/user/myshop.svg" /><span>我的购物车</span>
        </li>
        <li>
          <img src="~assets/img/user/shopcage.svg" alt="" /><span
            >下载购物APP</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  },
};
</script>
<style scoped>
.user {
  height: 100vh;
  position: relative;
}
.top {
  width: 100%;
  height: 120px;
  background-color: pink;
}
.top .title {
  width: 100%;
  margin-bottom: 10px;
  padding-top: 8px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}
.main {
  height: 70%;
  width: 100%;
  display: flex;
}
.main .img {
  width: 20%;
  height: 100%;
  position: relative;
}
.main .img img {
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
}
.main .zc {
  flex: 1;
}
.main .zc div:nth-child(1) {
  font-size: 19px;
  width: 100%;
  height: 35%;
  padding-top: 10px;
  padding-left: 15px;
}
.main .zc div:nth-child(2) {
  width: 100%;
  height: 50%;
  padding-left: 10px;
}
.main .zc div img {
  padding-top: 5px;
  float: left;
  width: 30px;
  height: 30px;
}
.main .zc div span {
  color: aliceblue;
  display: block;
  width: 80%;
  padding-top: 10px;
}
.main .last {
  padding-top: 20px;
  width: 8%;
  font-size: 28px;
  height: 100%;
  text-align: center;
  color: white;
}
.mine {
  background-color: #fff;
  width: 100%;
  height: 80px;
  border-bottom: 15px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.mine div {
  width: 33%;
  height: 100%;
  position: relative;
}
.mine div div {
  width: 60%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mine div div span {
  display: block;
  width: 100%;
  height: 50%;
  text-align: center;
  line-height: 100%;
}
.mine div span:nth-child(1) {
  font-size: 19px;
  color: orange;
}
.botton {
  width: 100%;
  height: 65%;
  background-color: #fff;
}
.botton ul {
  width: 100%;
  height: 100%;
}
.botton ul li {
  padding-left: 10px;
  width: 100%;
  height: 50px;
  position: relative;
}
ul li img {
  float: left;
  width: 40px;
  height: 40px;
}
ul li span {
  display: block;
  width: 40%;
  height: 50%;
  line-height: 100%;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
}
</style>
