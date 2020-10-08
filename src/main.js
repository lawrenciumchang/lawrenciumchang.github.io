import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyLoad from 'vue-lazyload';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

Vue.use(VueLazyLoad);

Vue.use(VueAnalytics, {
  id: 'UA-99294260-4',
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
