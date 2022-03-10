<template>
  <div class="check" :class="{ active: isActive }">
    <img src="~assets/img/shop/check.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "check",
  data() {
    return {};
  },
  props: { isActive: { type: Boolean, default: true } },
  methods: {},
  components: {},
};
</script>
<style scoped>
.check {
  border: 2px solid #aaa;
  border-radius: 50%;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
.active {
  background-color: red;
  border: 2px solid red;
}
</style>
