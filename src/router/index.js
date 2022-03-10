import vue from "vue";
import vuerouter from "vue-router";

vue.use(vuerouter);
const home = () => import("../views/home/Home.vue");
const kinds = () => import("../views/kinds/Kinds.vue");
const shopcar = () => import("../views/shopcar/Shopcar.vue");
const user = () => import("../views/user/User.vue");
const detail = () => import("../views/detail/detail.vue");

const routes = [
  { path: "", redirect: "/home" },
  { path: "/home", component: home },
  { path: "/kinds", component: kinds },
  { path: "/shopcar", component: shopcar },
  { path: "/user", component: user },
  { path: "/detail/:iid", component: detail },
];

const router = new vuerouter({
  routes,
  mode: "history",
});

export default router;
