import Vuex from "vuex";
import Vue from 'vue'
import cart from './cart';
import catalog from "./catalog";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    catalog
  }
});
