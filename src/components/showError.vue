<template>
  <div v-show="show" class="jumbotron jumbotron-fluid mistake bg-danger">
    <div class="container">
      <h1 class="display-4">error</h1>
      <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showError',
  props: {
    show: Boolean,
    default: false
  }
};
</script>
