import './firebase.variables';
import Vue from 'vue'
import App from './App.vue'
import VueFire  from 'vuefire';

import { Ionic } from '@ionic/vue';

Vue.config.productionTip = false
Vue.use(VueFire);
Vue.use(Ionic);
new Vue({
  render: h => h(App),
}).$mount('#app')
