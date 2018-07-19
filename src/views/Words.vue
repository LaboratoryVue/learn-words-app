<template>
  <div class="words">
    <div class="row mb-4">
      <div class="col">
        <words-list />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button @click="onSelect()" type="button" class="btn btn-info text-capitalize">add new word</button>
      </div>
    </div>
  </div>
</template>

<script>
import WordsList from '@/components/WordsList';
export default {
  name: 'Words',
  components: {
    WordsList
  },
  methods: {
    onSelect() {
      this.$router.push('/adding');
    }
  }
};
</script>
