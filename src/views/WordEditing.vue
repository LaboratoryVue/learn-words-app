<template>
  <div class="row">
    <div class="col">
      <h3>WordEditing</h3>
      <form @submit.prevent="onEdit()">
        <div class="form-group">
          <label class="text-capitalize" for="origin">origin text</label>
          <input v-model="word.origin" type="text" class="form-control" id="origin">
        </div>
        <div class="form-group">
          <label class="text-capitalize" for="translated">translated text</label>
          <input v-model="word.translated" type="text" class="form-control" id="translated">
        </div>
        <button type="submit" class="btn btn-primary text-capitalize mr-3">edit word</button>
        <button @click="goBack()" type="button" class="btn btn-warning text-capitalize">cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordEditing',
  methods: {
    onEdit() {
      console.log(this.word);
    }
  },
  computed: {
    word() {
      return this.$store.getters.getSelectedWord(this.$route.params.id);
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
//
</style>
