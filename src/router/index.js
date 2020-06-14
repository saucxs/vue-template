import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/pages/login/index";
import Registry from "@/pages/registry/index";

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
  if (!localStorage.HappyChatUserToken) {
    if (flag) {
      next()
    } else {
      next("/login");
    }
  }
});

export default router;
