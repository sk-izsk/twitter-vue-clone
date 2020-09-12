import Vue from 'vue';
import feather from 'vue-icon';
import App from './App.vue';
import './assets/styles/index.css';

Vue.config.productionTip = true;
Vue.use(feather, 'v-icon');

new Vue({
  render: (h) => h(App),
}).$mount('#app');
