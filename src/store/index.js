import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

import actions from "store/actions.js";
import mutations from "store/mutations.js";
import getters from "store/getters.js";

const state = {
  cartList: [],
};

const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
