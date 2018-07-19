import Vue from 'vue';
import Vuex from 'vuex';
import db from '../assets/db.json';

Vue.use(Vuex);

const state = {
  words: []
};

const getters = {
  getWords(state) {
    return state.words;
  }
};

const mutations = {
  INIT_WORDS(state) {
    db.forEach(element => state.words.push(element));
  },
  ADD_WORD(state, payload) {
    state.words.push(payload);
  }
};

const actions = {
  initWords({ commit }) {
    commit('INIT_WORDS');
  },
  addWord({ commit }, payload) {
    commit('ADD_WORD', payload);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
