import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueLazyload from 'vue-lazyload'
import animate from 'animate.css'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import 'assets/less/public.less'
import 'scripts/rem.js'
// require("!style-loader!css-loader!less-loader!./assets/css/reset.css");
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  error: 'assets/img/imgerror.jpg',
  loading: require("./assets/img/imgloading.gif"),
  preLoad: 1,
  attempt: 1
});

Vue.use(MuseUI);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
// Vue.use(VueLazyload);

Vue.config.productionTip = false;
Vue.config.debug = true;

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'https://m.simpletour.com/images/defalut-img@588250.png',
//   loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
//   attempt: 1,
//   listenEvents: [ 'scroll', 'mousewheel' ]
// });


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
