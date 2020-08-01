import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false;

Vue.use(VueLazyLoad);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
