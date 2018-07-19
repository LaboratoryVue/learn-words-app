<template>
  <div class="indicator">
    <section :style="{ width: width }" class="indicator__inner"></section>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  computed: {
    width() {
      return 10 + '%';
    }
  }
};
</script>

<style lang="scss" scoped>
.indicator {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  &__inner {
    height: 3px;
    background-color: palevioletred;
  }
}
</style>
