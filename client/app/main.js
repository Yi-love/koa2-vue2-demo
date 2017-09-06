'use strict';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = true; //开启提示

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components : {App}
});
