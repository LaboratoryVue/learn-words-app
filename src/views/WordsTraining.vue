<template>
  <div class="training word">
    <h3 class="text-capitalize mb-4 training__title">select translation</h3>
    <p class="word__current">{{ current.origin }}</p>
    <ul v-show="showList" class="list-group word__list">
      <li @click="onSelect(i)" class="list-group-item mb-2 word__item" v-for="(translate,i) in translated" :key="i">
        {{ translate }}
      </li>
    </ul>
    <div v-show="showSuccess" class="jumbotron jumbotron-fluid success bg-success">
      <div class="container">
        <h1 class="display-4">success</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    <div v-show="showError" class="jumbotron jumbotron-fluid mistake bg-danger">
      <div class="container">
        <h1 class="display-4">error</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    <section v-show="showNext" class="controls">
      <button type="button" :class="indicator" class="btn btn-lg">next</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WordsTraining',
  data() {
    return {
      showSuccess: false,
      showError: false,
      showList: true,
      showNext: false,
      indicator: ''
    };
  },
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
      this.indicator = '';
      this.showList = false;
      if (this.translated[index] === this.current.translated) {
        // success
        this.showSuccess = true;
        this.showError = false;
        this.indicator = 'btn-success';
      } else {
        // mistake
        this.showError = true;
        this.showSuccess = false;
        this.indicator = 'btn-danger';
      }
      this.showNext = true;
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
.success,
.mistake {
  border-radius: 0.4rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
}
</style>
