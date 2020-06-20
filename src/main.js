// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

//  The Vue build version to load with the `import` command
//  (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import VueClipboard from 'vue-clipboard2'

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

Vue.use(ElementUI)

Vue.use(VueClipboard)


/* eslint-disable no-new */
new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  store,
}).$mount('#app')
