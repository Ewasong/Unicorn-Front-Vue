import Vue from 'vue'
import Router from 'vue-router'
// import { notification } from "ant-design-vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/user',
      hideInMenu: true,
      component: () =>
        import(/* webpackChunkName: 'layout' */ '@/layouts/UserLayout'),
      children: [
        {
          path: '/user',
          redirect: '/user/login'
        },
        {
          path: '/user/login',
          name: 'login',
          component: () =>
          import(/* webpackChunkName: 'user' */ '@/views/User/Login')
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  // if (to.path !== from.path) {
  //   NProgress.start();
  // }
  // const record = findLast(to.matched, record => record.meta.authority);
  // if (record && !check(record.meta.authority)) {
  //   if (!isLogin() && to.path !== "/user/login") {
  //     next({
  //       path: "/user/login"
  //     });
  //   } else if (to.path !== "/403") {
  //     notification.error({
  //       message: "403",
  //       description: "你没有权限访问，请联系管理员咨询。"
  //     });
  //     next({
  //       path: "/403"
  //     });
  //   }
  //   NProgress.done();
  // }

  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
