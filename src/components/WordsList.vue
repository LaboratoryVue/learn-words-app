<template>
  <ul class="list-group">
    <words-list-item />
  </ul>
</template>

<script>
import WordsListItem from './WordsListItem';
export default {
  name: 'WordsList',
  components: {
    WordsListItem
  },
  computed: {
    words() {
      return this.$store.getters.getWords;
    }
  }
};
</script>

<style scoped lang="scss">
//
</style>
