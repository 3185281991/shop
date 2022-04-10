<template>
  <div class="backtop">
    <img src="~assets/img/backtop.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "backtop",
  data() {
    return {};
  },
};
</script>
<style scoped>
.backtop {
  position: fixed;
  bottom: 12%;
  right: 10%;
  z-index: 10;
  border-radius: 50%;
}
img {
  width: 40px;
  height: 40px;
}
</style>
