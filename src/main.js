import Vue from 'vue'
import App from './App.vue'

import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

Vue.use(Chartkick.use(Chart));

Vue.filter('to-uppercase',(value)=>{
  return value.toUpperCase();
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
