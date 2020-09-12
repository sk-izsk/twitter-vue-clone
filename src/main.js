import Vue from 'vue';
import App from './App.vue';
import './assets/styles/index.css';

Vue.config.productionTip = true;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
