<template>
  <div class="row">
    <div class="col">
      <h2 class="text-capitalize">adding new word</h2>
      <form @submit.prevent="onAdd()">
        <div class="form-group">
          <label class="text-capitalize" for="origin">origin text</label>
          <input v-model="word.origin" type="text" class="form-control" id="origin" placeholder="Enter origin text" required>
        </div>
        <div class="form-group">
          <label class="text-capitalize" for="translated">translated text</label>
          <input v-model="word.translated" type="text" class="form-control" id="translated" placeholder="Enter translated text" required>
        </div>
        <button type="submit" class="btn btn-primary text-capitalize mr-3" :disabled="disabled">add word</button>
        <button @click="goBack()" type="button" class="btn btn-warning text-capitalize">cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordsAdding',
  data() {
    return {
      word: {
        origin: null,
        translated: null
      }
    };
  },
  computed: {
    disabled() {
      return this.word.origin == undefined && this.word.translated == undefined;
    }
  },
  methods: {
    clearForm() {
      for (const key in this.word) {
        if (this.word.hasOwnProperty(key)) {
          this.word[key] = null;
        }
      }
    },
    onAdd() {
      this.$store.dispatch('addWord', { ...this.word });
      this.clearForm();
      this.$router.push('/');
    },
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
//
</style>
