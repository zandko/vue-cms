const Login = r => require.ensure([], () => r(require('../pages/Login')), 'Login');
const Container = r => require.ensure([], () => r(require('../pages/container/Container')), 'Container');
const Dashboard = r => require.ensure([], () => r(require('../pages/dashboard/Index')), 'Dashboard');
const Article = r => require.ensure([], () => r(require('../pages/article/Index')), 'Article');
const ArticleList = r => require.ensure([], () => r(require('../pages/article/list/List.vue')), 'ArticleList');
const ArticleAdd = r => require.ensure([], () => r(require('../pages/article/add/Add.vue')), 'ArticleAdd');

export default [{
  path: '/login',
  component: Login
}, {
  path: '/',
  redirect: '/dashboard',
  component: Container,
  children: [{
      path: 'dashboard',
      name: '系统首页',
      icon: 'el-icon-back',
      component: Dashboard,
    },
    {
      path: 'article',
      name: '内容管理',
      icon: 'el-icon-tickets',
      component: Article,
      children: [{
          path: '',
          name: '内容列表',
          component: ArticleList,
        },
        {
          path: 'add',
          name: '增加内容',
          component: ArticleAdd,
        }
      ]
    }
  ]
}, ]