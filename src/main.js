import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyLoad from 'vue-lazyload';
import VueScrollReveal from 'vue-scroll-reveal';
import VueAnalytics from 'vue-analytics';
import vueHeadful from 'vue-headful';

Vue.config.productionTip = false;

const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueLazyLoad);
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1200,
  scale: 1,
  distance: '10px'
});

Vue.use(VueAnalytics, {
  id: 'UA-99294260-4',
  router,
  debug: {
    // enabled: !isProd,
    sendHitTask: isProd
  }
});

Vue.component('vue-headful', vueHeadful);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
