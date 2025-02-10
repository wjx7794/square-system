/**
 * 路由配置
 */
export const routes = [
  // 根路径
  {
    path: '/',
    redirect: '/home/summary',
  },
  // 首页
  {
    name: '首页',
    path: '/home',
    routes: [
      { path: '/home/summary', component: '@/pages/Summary' },
      { path: '/home/introduction', component: '@/pages/Introduction' },
    ],
    // 权限定义返回值的某个 key
    access: 'showHome',
  },
  // 登陆
  {
    name: '登陆',
    path: '/login',
    component: '@/pages/Login',
  },
  // 注册
  {
    name: '注册',
    path: '/registry',
    component: '@/pages/Registry',
  },
  // 子应用 - 配置 blog 关联的路由
  {
    path: '/blog/*',
    // microApp: 'blog',
    component: '@/pages/Blog',
  },
  // 子应用 - 配置 component 关联的路由
  {
    path: '/component/*',
    microApp: 'component',
  },
];

/**
 * 左侧菜单配置
 * 参考: [https://procomponents.ant.design/components/layout#menu]
 */
export const menuData = [
  // 首页
  {
    // 菜单的名字
    name: '首页',
    path: '/home',
    // 在菜单中隐藏子节点
    hideChildrenInMenu: false,
    // layout 的菜单模式
    layout: 'mix',
    children: [
      {
        path: '/home/summary',
        name: '简介',
        // 在面包屑中隐藏
        hideInBreadcrumb: true,
        // 在菜单中隐藏自己和子节点
        hideInMenu: false,
        // 不展示菜单
        // menuRender: false,
      },
      { path: '/home/introduction', name: '关于我', hideInBreadcrumb: true },
    ],
  },
  // 登陆
  {
    // 菜单的名字
    name: '登陆',
    path: '/login',
    // 在菜单中隐藏自己和子节点
    hideInMenu: true,
    // 不展示菜单
    menuRender: false,
  },
  // 注册
  {
    // 菜单的名字
    name: '注册',
    path: '/registry',
    // 在菜单中隐藏自己和子节点
    hideInMenu: true,
    // 不展示菜单
    menuRender: false,
  },
  // 子应用 - 博客
  {
    // 菜单的名字
    name: '博客',
    path: '/blog',
    // 在菜单中隐藏子节点
    hideChildrenInMenu: false,
    // layout 的菜单模式
    layout: 'mix',
    children: [
      {
        path: '/blog/list',
        name: '列表',
        // 在面包屑中隐藏
        hideInBreadcrumb: true,
        // 在菜单中隐藏自己和子节点
        hideInMenu: false,
        // 不展示菜单
        // menuRender: false,
      },
      { path: '/blog/detail', name: '详情', hideInBreadcrumb: true },
    ],
  },
  // 子应用 - 组件
  {
    // 菜单的名字
    name: '组件',
    path: '/component',
    // 在菜单中隐藏子节点
    hideChildrenInMenu: false,
    // layout 的菜单模式
    layout: 'mix',
    children: [
      {
        path: '/component/brief',
        name: '介绍',
        // 在面包屑中隐藏
        hideInBreadcrumb: true,
        // 在菜单中隐藏自己和子节点
        hideInMenu: false,
        // 不展示菜单
        // menuRender: false,
      },
      { path: '/component/detail', name: '详情', hideInBreadcrumb: true },
    ],
  },
];
