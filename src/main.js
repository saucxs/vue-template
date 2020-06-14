//  The Vue build version to load with the `import` command
//  (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "@/assets/css/index.scss"
import VueClipboard from 'vue-clipboard2'
import Loading from './components/Loading/index'

/* 引入全局过滤器 */
import * as fliterCommon from '../src/utils/common'
Object.keys(fliterCommon).forEach(key => Vue.filter(key, fliterCommon[key]));

/* 引入全局指令focus */
Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  }
})

/* scroll全局置底指令scroll */
import scrollDirective from '../src/utils/scroll';
Vue.directive('scroll', scrollDirective)

Vue.use(Loading)

Vue.use(VueClipboard)

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
