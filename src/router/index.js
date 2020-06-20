import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home";
import Login from "@/pages/login/index";
import Registry from "@/pages/registry/index";
import WriteWeekly from "@/pages/writeWeekly/index";

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    { //  登录
      path: "/login",
      component: Login
    },
    { //  注册
      path: "/registry",
      component: Registry
    },
    {
      path: '/',
      name: 'home',
      meta: {
        key: '1'
      },
      component: Home,
      children: [{
        path: '/writeWeekly',
        name: 'writeWeekly',
        meta: {
          key: '1-1'
        },
        component: WriteWeekly
      }]
    },
  ]
})

/* 路由白名单 */
let whiteRouter = ["/login", "/registry"]

/* 路由守卫 */
router.beforeEach((to, from, next) => {
  let flag = whiteRouter.some(item => {
    if (to.path.indexOf(item) >= 0) {
      return true
    }
  })
  if (!localStorage.XXXUserToken) {
    if (flag) {
      next()
    } else {
      next("/login");
    }
  } else {
    if (flag) {
      next("/writeWeekly");
    } else {
      next();
    }
  }
});

export default router;
