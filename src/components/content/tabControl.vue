<template>
  <div class="tabControl">
    <div
      class="controlitem"
      v-for="(item, index) in titles"
      :class="{ active: index === currentIndex }"
      :key="item"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabclick", index);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.tabControl {
  display: flex;
  text-align: center;
  font-size: 18px;
  top: 45px;
  background-color: white;
}
.controlitem {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active {
  color: pink;
}
.active span {
  border-bottom: 3px pink solid;
}
span {
  padding: 6px;
}
</style>
