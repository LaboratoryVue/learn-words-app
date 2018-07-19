<template>
  <div class="training">
    <h3 class="text-capitalize mb-4">select translation</h3>
    <p class="word">{{ current.origin }}</p>
    <ul class="list-group">
      <li class="list-group-item mb-2" v-for="(translate,i) in translated" :key="i">
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
        // if (this.words[index].translated !== this.current.translated) {
        //   result.push(this.words[index].translated);
        // }
        result.push(this.words[index].translated);
      }
      return result.slice(0, 6);
    }
  }
};
</script>

<style lang="scss" scoped>
.word {
  text-align: center;
  color: blue;
  font-weight: 700;
  font-size: 2rem;
}
</style>
