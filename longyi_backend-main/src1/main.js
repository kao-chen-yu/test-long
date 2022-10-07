// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram ,faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueBreadcrumbs from 'vue-breadcrumbs';
import JwPagination from 'jw-vue-pagination';
import "./plugins/vue2GoogleMaps";
import axios from 'axios';
import "./style/index.css"
Vue.prototype.$axios = axios;

/* 註冊所有組件為全域 */
Vue.use(BootstrapVue);
Vue.use(VueBreadcrumbs)
library.add(faInstagram, faFacebook, faYoutube , faAngleRight ,faGooglePlus);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
