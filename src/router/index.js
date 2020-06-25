import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home";
import Login from "@/pages/login/index";
import Registry from "@/pages/registry/index";
import WriteWeekly from "@/pages/writeWeekly/index";
import WeeklyList from "@/pages/weeklyList/index";
import Part3 from "@/pages/part3/index";
import Part31 from "@/pages/part3/index1";
import Part32 from "@/pages/part3/index2";

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: "/",
      redirect: "/login",
      meta: {
        key: '0',
        name: '登陆',
      },
    },
    { //  登录
      path: "/login",
      component: Login,
      meta: {
        key: '0',
        name: '登陆',
      },
    },
    { //  注册
      path: "/registry",
      component: Registry,
      meta: {
        key: '0',
        name: '注册',
      },
    },
    {
      path: '/',
      name: 'home',
      meta: {
        key: '1',
        name: '主页',
      },
      component: Home,
      children: [
        {
          path: '/writeWeekly',
          name: 'writeWeekly',
          icon: 'el-icon-view',
          isHasChild: false,
          meta: {
            key: '1-1',
            name: '模块1',
          },
          component: WriteWeekly
        },
        {
          path: '/weeklyList',
          name: 'weeklyList',
          icon: 'el-icon-view',
          isHasChild: false,
          meta: {
            key: '1-2',
            name: '模块2',
          },
          component: WeeklyList
        },
        {
          path: '/part3',
          name: 'part3',
          icon: 'el-icon-setting',
          isHasChild: true,
          meta: {
            key: '1-3',
            name: '模块3',
          },
          component: Part3,
          children: [
            {
              path: '/part3Child1',
              name: 'part3Child1',
              meta: {
                key: '1-3-1',
                name: '模块3的子模块',
              },
              component: Part31,
            },
            {
              path: '/part3Child2',
              name: 'part3Child2',
              meta: {
                key: '1-3-2',
                name: '模块3的子模块2',
              },
              component: Part32,
            }
          ]
        },
      ]
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
