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
  },
  getSelectedWord(state) {
    return id => state.words.find(el => el.origin === id);
  }
};

const mutations = {
  INIT_WORDS(state) {
    db.forEach(element => state.words.push(element));
  },
  ADD_WORD(state, payload) {
    const sample = state.words.find(el => el === payload.origin.toLowerCase());
    if (sample) return;
    const newWord = {
      origin: payload.origin.toLowerCase(),
      translated: payload.translated.toLowerCase()
    };
    state.words.push(newWord);
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
