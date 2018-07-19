<template>
  <div class="training">
    <h3 class="text-capitalize">select translation</h3>
  </div>
</template>

<script>
export default {
  name: 'WordsTraining',
  computed: {
    words() {
      return this.$store.getters.getTestWords
    }
  }
};
</script>
