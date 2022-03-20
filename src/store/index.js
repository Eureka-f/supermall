//vue3的写法
import { createStore } from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const state = {
  cartList: []
}
const store =createStore({
  state,
  getters,
  mutations,
  actions,
});

export default store
