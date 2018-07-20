<template>
  <div v-show="show" class="jumbotron jumbotron-fluid success bg-success">
    <div class="container">
      <h1 class="display-4">success</h1>
      <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showSuccess',
  props: {
    show: Boolean,
    default: false
  }
};
</script>
