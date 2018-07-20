<template>
  <div class="training word">
    <h3 class="text-capitalize mb-4 training__title">select translation</h3>
    <p class="word__current text-uppercase">{{ current.origin }}</p>
    <ul v-show="showList" class="list-group word__list">
      <li @click="onSelect(i)" class="list-group-item mb-2 word__item" v-for="(translate,i) in translated" :key="i">
        <span class="text-lowercase">{{ translate }}</span>
      </li>
    </ul>
    <success-block :show="showSuccess" />
    <error-block :show="showError" />
    <section v-show="showNext" class="controls">
      <button @click="onNext()" type="button" class="btn btn-info btn-lg">next</button>
    </section>
  </div>
</template>

<script>
function shuffle(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
import ErrorBlock from '../components/showError';
import SuccessBlock from '../components/ShowSuccess';
export default {
  name: 'WordsTraining',
  data() {
    return {
      showSuccess: false,
      showError: false,
      showList: true,
      showNext: false,
      index: 0,
      quantity: 6,
      results: []
    };
  },
  components: {
    ErrorBlock,
    SuccessBlock
  },
  computed: {
    current() {
      return this.words[this.index];
    },
    words() {
      return this.$store.getters.getTestWords;
    },
    translated() {
      const result = [];
      let chunk = [];
      let summury = [];
      for (let index = 0; index < this.words.length; index++) {
        result.push(this.words[index].translated);
      }
      summury.push(
        result.filter(el => el === this.words[this.index].translated)[0]
      );
      chunk = result.filter(el => el !== this.words[this.index].translated);
      for (let i = 0; i < this.quantity - 1; i += 1) {
        const rand = Math.floor(Math.random() * chunk.length);
        summury.push(chunk.splice(rand, 1)[0]);
      }
      return shuffle(summury);
    },
    progress() {
      // TODO => watch?
      return this.results.length * 100 / this.words.length;
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
        this.results.push(true);
      } else {
        // mistake
        this.showError = true;
        this.showSuccess = false;
        this.results.push(false);
      }
      this.showNext = true;
    },
    onNext() {
      if (this.index < this.words.length) {
        this.index += 1;
        this.showList = true;
        this.showNext = false;
        this.showSuccess = false;
        this.showError = false;
      }
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
    font-size: 1.6rem;
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
