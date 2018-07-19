import Words from '@/views/Words.vue';
import WordsTraining from '@/views/WordsTraining.vue';

export default [
  {
    path: '/',
    name: 'Words',
    component: Words
  },
  {
    path: '/training',
    name: 'WordsTraining',
    component: WordsTraining
  }
];
