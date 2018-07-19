<template>
  <section>
    <indicator />
    <div id="app" class="container">
      <div class="row">
        <div class="col">
          <navigation />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from '@/components/TheNavigation';
import Indicator from '@/components/TheProgressbar';
export default {
  name: 'RootApp',
  components: {
    Navigation,
    Indicator
  }
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
