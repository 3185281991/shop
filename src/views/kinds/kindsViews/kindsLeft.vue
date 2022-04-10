<template>
  <div class="kindsLeft" v-if="Object.keys(list).length !== 0">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="itemClick(index)"
        :class="{ hasLeft: currentIndex == index }"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "kindsLeft",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    list: {
      type: Array,
    },
  },
  components: {},
  methods: {
    itemClick(index) {
      this.$emit("itemClick", index);
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped>
.kindsLeft {
  float: left;
  width: 30%;
  background-color: rgb(241, 228, 228);
  height: 100vh;
}
ul {
  width: 100%;
}
li {
  margin: 0 auto;
  width: 90%;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  list-style: none;
}
.hasLeft {
  border-left: 6px solid coral;
  color: pink;
  font-size: 18px;
}
</style>
