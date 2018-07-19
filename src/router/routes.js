import Words from '@/views/Words.vue';
import WordsTraining from '@/views/WordsTraining.vue';
import WordsAdding from '@/views/WordsAdding.vue';

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
  },
  {
    path: '/adding',
    name: 'WordsAdding',
    component: WordsAdding
  }
];
