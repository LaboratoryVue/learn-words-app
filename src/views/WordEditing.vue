<template>
  <div class="row">
    <div class="col">
      <h3 class="text-capitalize mb-4">word <span class="edit">{{ word.origin }}</span> editing</h3>
      <form @submit.prevent="onEdit()">
        <div class="form-group">
          <label class="text-capitalize" for="origin">origin text</label>
          <input v-model="word.origin" type="text" class="form-control" id="origin">
        </div>
        <div class="form-group">
          <label class="text-capitalize" for="translated">translated text</label>
          <input v-model="word.translated" type="text" class="form-control" id="translated">
        </div>
        <button type="submit" class="btn btn-info text-capitalize mr-3">edit word</button>
        <button @click="goBack()" type="button" class="btn btn-warning text-capitalize">cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordEditing',
  computed: {
    word() {
      return this.$store.getters.getSelectedWord(this.$route.params.id);
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    onEdit() {
      if (this.word.origin === '' && this.word.translated === '') return;
      const editWord = {
        origin: this.word.origin,
        translated: this.word.translated
      };
      this.goBack();
    }
  }
};
</script>

<style lang="scss" scoped>
.edit {
  color: forestgreen;
}
</style>
