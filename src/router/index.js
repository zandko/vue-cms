const Login = r => require.ensure([], () => r(require('@/pages/Login')), 'Login');
const Container = r => require.ensure([], () => r(require('@/pages/container/index')), 'Container');
const Dashboard = r => require.ensure([], () => r(require('@/pages/dashboard/index')), 'Dashboard');
const Example = r => require.ensure([], () => r(require('@/pages/example/index')), 'Example');
const ArticleList = r => require.ensure([], () => r(require('@/pages/example/list')), 'ArticleList');
const CreateAnArticle = r => require.ensure([], () => r(require('@/pages/example/create')), 'ArticleCreate');

export default [{
  path: '/login',
  component: Login
}, {
  path: '/',
  redirect: '/dashboard',
  component: Container,
  children: [{
      path: 'dashboard',
      meta: {
        title: '系统首页',
        icon: 'fa fa-tachometer'
      },
      component: Dashboard,
    },
    {
      path: 'example',
      meta: {
        title: '综合案例',
        icon: 'fa fa-connectdevelop'
      },
      component: Example,
      children: [{
          path: 'create',
          meta: {
            title: '创建文章',
            icon: 'fa fa-pencil-square-o'
          },
          component: CreateAnArticle,
        },
        {
          path: '',
          meta: {
            title: '文章列表',
            icon: 'fa fa-list-ul'
          },
          component: ArticleList,
        }
      ]
    }
  ]
}]