import Vue from 'vue';
import App from './App.vue';
// router
import router from './router/index';
// store
import store from './store/index';
// styles
import '../node_modules/bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    this.$store.dispatch('initWords');
  }
}).$mount('#app');
