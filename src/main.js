import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VeHistogram from 'v-charts/lib/histogram.common'
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router'
import store from './store';
import '@/styles/index.scss';
import 'font-awesome/scss/font-awesome.scss'; // 字体图标

Vue.config.productionTip = false;

// 配置路由
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem("user");
  }
  let user = sessionStorage.getItem("user");
  if (!user && to.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next();
  }
});

Vue.use(ElementUI);
Vue.component(VeHistogram.name, VeHistogram)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');