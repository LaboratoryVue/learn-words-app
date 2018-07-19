import WordsList from '../views/WordsList.vue';
import WordsTraining from '../views/WordsTraining.vue';

export default [
  {
    path: '/',
    name: 'WordsList',
    component: WordsList
  },
  {
    path: '/training',
    name: 'WordsTraining',
    component: WordsTraining
  }
];
