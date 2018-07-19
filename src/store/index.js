import Vue from 'vue';
import Vuex from 'vuex';
import db from '../assets/db.json';

Vue.use(Vuex);

const state = {
  words: [],
  testWords: []
};

const getters = {
  getWords(state) {
    return state.words;
  },
  getSelectedWord(state) {
    return id => state.words.find(el => el.origin === id);
  },
  getTestWords(state) {
    return state.testWords;
  }
};

const mutations = {
  INIT_WORDS(state) {
    db.forEach(element => state.words.push(element));
    state.testWords = state.words.slice(0, 20);
  },
  ADD_WORD(state, payload) {
    const sample = state.words.find(el => el === payload.origin.toLowerCase());
    if (sample) return;
    const newWord = {
      origin: payload.origin.toLowerCase(),
      translated: payload.translated.toLowerCase()
    };
    state.words.push(newWord);
  },
  EDIT_WORD(state, payload) {
    const index = state.words.findIndex(
      el => el.origin === payload.origin.toLowerCase()
    );
    if (!index) return;
    state.words[index].origin = payload.origin.toLowerCase();
    state.words[index].translated = payload.translated.toLowerCase();
  }
};

const actions = {
  initWords({ commit }) {
    commit('INIT_WORDS');
  },
  addWord({ commit }, payload) {
    commit('ADD_WORD', payload);
  },
  editWord({ commit }, payload) {
    commit('EDIT_WORD', payload);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
