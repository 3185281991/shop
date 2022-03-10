import { debounce } from "@/common/utils.js";
import backtop from "components/common/BackTop/backtop";
export const itemImgListener = {
  data() {
    return { itemImgListener: null, newFresh: null };
  },
  mounted() {
    this.newFresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      this.newFresh();
      //图片加载一次就刷新，非常频繁，防抖
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
};
export const backTop = {
  data() {
    return { isshow: false };
  },
  components: { backtop },
  methods: {
    //回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1500);
    },
  },
};
