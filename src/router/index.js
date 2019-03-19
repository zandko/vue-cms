const Login = r => require.ensure([], () => r(require('../pages/Login')), 'Login');
const Container = r => require.ensure([], () => r(require('../pages/container/Container')), 'Container');
const Dashboard = r => require.ensure([], () => r(require('../pages/dashboard/Index')), 'Dashboard');
const Article = r => require.ensure([], () => r(require('../pages/article/Index')), 'Article');

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
      component: Dashboard,
      children: [{
          path: 'dashboard1',
          name: '首页1',
          component: Dashboard,
        },
        {
          path: 'dashboard2',
          name: '首页2',
          component: Dashboard,
          children: [{
              path: 'dashboard21',
              name: '首页21',
              component: Dashboard,
            },
            {
              path: 'dashboard22',
              name: '首页22',
              component: Dashboard,
            },
          ]
        },
      ]
    },
    {
      path: 'article',
      name: '内容管理',
      component: Article,
      children: [{
          path: 'article11',
          name: '内容列表',
          component: Dashboard,
        },
        {
          path: 'article111',
          name: '增加内容',
          component: Dashboard,
        }
      ]
    },
    {
      path: 'article1',
      name: '文章1',
      component: Article,
    },
    {
      path: 'article2',
      name: '文章2',
      component: Article,
    },
    {
      path: 'article3',
      name: '文章3',
      component: Article,
    },
    {
      path: 'setting',
      name: '系统设置',
      component: Article,
    },
  ]
}, ]