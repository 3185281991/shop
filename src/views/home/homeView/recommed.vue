<template>
  <div>
    <div class="recommed">
      <div class="con">
        <div class="item" v-for="(item, index) in recommedList" :key="index">
          <a :href="item.link"><img :src="item.image" alt="" /></a>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommed",
  data() {
    return {};
  },
  props: {
    recommedList: {
      type: Array,
    },
  },
};
</script>
<style scoped>
.recommed {
  width: 100%;
  border-bottom: 10px solid rgba(0, 0, 0, 0.2);
}
.con {
  display: flex;
  justify-content: center;
}
.item {
  width: 25%;
  height: 100px;
  position: relative;
}
a {
  width: 100%;
  height: 86%;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
img {
  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
}
span {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  text-align: center;
  font-weight: bold;
  padding-top: 15px;
}
span:hover {
  color: coral;
}
</style>
