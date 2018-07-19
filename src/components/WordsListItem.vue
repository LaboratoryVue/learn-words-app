<template>
  <li class="list-group-item d-flex justify-content-between align-items-center mb-2 word">
    <section class="d-flex justify-content-between align-items-center word__wrapper">
      <span class="text-capitalize word__primary">{{ word.origin }}</span>
      <span class="text-capitalize word__secondary">{{ word.translated }}</span>
    </section>
    <button @click="onEdit(word.origin)" class="btn btn-primary btn-sm text-capitalize word__button">edit</button>
  </li>
</template>

<script>
export default {
  name: 'WordsListItem',
  props: {
    word: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onEdit(id) {
      this.$router.push(`/editing/${id}`);
    }
  }
};
</script>

<style scoped lang="scss">
.word {
  //
  &__wrapper {
    width: 60%;
  }
  &__primary {
    font-weight: 700;
    color: forestgreen;
  }
  &__secondary {
    color: darkgreen;
    font-style: italic;
  }
  &__button {
    font-size: 0.85rem;
    line-height: 1;
  }
}
</style>
