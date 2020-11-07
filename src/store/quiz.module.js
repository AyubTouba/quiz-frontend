//import Vue from "vue";
import { ADD_QUIZ,SET_QUESTION,QUIZ_FINISHED } from "./actions.type";
import { SET_QUIZ,UPDATE_QUESTION,SET_ISFINISH } from "./mutations.type";
const state = {
  quiz: {},
  isfinished:false
};

const getters = {
    quiz : state => state.quiz,
    questions : state => state.quiz.questions,
    isFinished : state => state.isfinished,
};

const actions = {
  [ADD_QUIZ]({ commit },payload) {
            commit(SET_QUIZ,payload)
    },
  [SET_QUESTION]({ commit },payload) {
      commit(UPDATE_QUESTION,payload)
},
  [QUIZ_FINISHED]({ commit },payload) {
  commit(SET_ISFINISH,payload)
}
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
 
  [SET_QUIZ](state, data) {
   state.quiz = data;
   state.isfinished = false;
  },
  /**
   * @description Update 'selected' attr for x question 
   */
  [UPDATE_QUESTION](state, {index,question}) {
    state.quiz.questions[index] = question;
   },
  [SET_ISFINISH](state, data) {
    state.isfinished = data;
   },
};

export default {
  state,
  getters,
  actions,
  mutations
};
