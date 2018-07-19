<template>
  <nav id="nav" class="nav nav-pills nav-fill">
    <router-link class="nav-item nav-link" to="/">words list</router-link>
    <router-link class="nav-item nav-link" to="/training">words training</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  & .nav-item {
    font-weight: bold;
    color: #2c3e50;
    text-transform: uppercase;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
