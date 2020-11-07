import Vue from "vue";
import Vuex from "vuex";
import theme from "./theme.module";
import quiz from "./quiz.module";
Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    theme,
    quiz
  }
});
