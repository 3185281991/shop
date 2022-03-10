import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import Fastclick from "fastclick";
import lazyload from "vue-lazyload";

//全局插件
import toast from "components/common/toast/index";

Vue.config.productionTip = false;

Vue.use(toast);

//选项配置
Vue.use(lazyload, {
  loading: require("./assets/img/loading.gif"),
});

//事件总线
Vue.prototype.$bus = new Vue({});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//调用fastclick来接绝移动端300ms延迟
Fastclick.attach(document.body);

import "swiper/dist/css/swiper.min.css";
