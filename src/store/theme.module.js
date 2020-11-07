import { FETCH_THEMES } from "./actions.type";
import { SET_THEMES } from "./mutations.type";
import { getThemes } from "../api/themes";
const state = {
  themes: [],
};

const getters = {
  themes : state => state.themes,
  getThemeById: (state) => (id) => { return state.themes.find(theme => theme.theme_id == id)}
};

const actions = {
  [FETCH_THEMES]({ commit }) {
    return getThemes().then((response) => {
          commit(SET_THEMES, response.data);
    }).catch((error) => {
        throw new Error(error);
    });
    }
 
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
 
  [SET_THEMES](state, data) {
    state.themes = data;
  },
 
};

export default {
  state,
  getters,
  actions,
  mutations
};
