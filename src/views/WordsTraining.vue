<template>
  <div class="training word">
    <h3 class="text-capitalize mb-4 training__title">select translation</h3>
    <p class="word__current">{{ current.origin }}</p>
    <ul class="list-group word__list">
      <li @click="onSelect(i)" class="list-group-item mb-2 word__item" v-for="(translate,i) in translated" :key="i">
        {{ translate }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WordsTraining',
  computed: {
    current() {
      return this.words[0];
    },
    words() {
      return this.$store.getters.getTestWords;
    },
    translated() {
      const result = [];
      for (let index = 0; index < this.words.length; index++) {
        result.push(this.words[index].translated);
      }
      return result.slice(0, 6);
    }
  },
  methods: {
    onSelect(index) {
      console.log(`${index}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.word {
  //
  &__current {
    text-align: center;
    color: blue;
    font-weight: 700;
    font-size: 2rem;
  }
  &__item {
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: lightblue;
    }
  }
}
</style>
