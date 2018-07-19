import Words from '@/views/Words.vue';
import WordsTraining from '@/views/WordsTraining.vue';
import WordsAdding from '@/views/WordsAdding.vue';
import WordEditing from '@/views/WordEditing.vue';

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
  },
  {
    path: '/editing/:id',
    name: 'WordEditing',
    component: WordEditing
  }
];
