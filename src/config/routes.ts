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
  /**---------------------------------------- 账户相关 start ----------------------------------------*/
  {
    name: '账户相关',
    path: '/info',
    routes: [
      {
        name: '登陆',
        path: '/info/login',
        component: '@/pages/Info/Login',
      },
      {
        name: '注册',
        path: '/info/registry',
        component: '@/pages/Info/Registry',
      },
      {
        name: '修改',
        path: '/info/edit',
        component: '@/pages/Info/Edit',
      },
      {
        name: '注销',
        path: '/info/remove',
        component: '@/pages/Info/Remove',
      },
    ],
    // 权限定义返回值的某个 key
    access: 'showHome',
  },
  /**---------------------------------------- 账户相关 end ----------------------------------------*/
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
  /**---------------------------------------- 账户相关 start ----------------------------------------*/
  {
    // 菜单的名字
    name: '账户相关',
    path: '/info',
    // 在菜单中隐藏子节点
    hideChildrenInMenu: false,
    // layout 的菜单模式
    layout: 'mix',
    hideInMenu: true,
    menuRender: false,
    children: [
      {
        path: '/info/login',
        name: '登陆',
        // 在面包屑中隐藏
        hideInBreadcrumb: true,
        // 在菜单中隐藏自己和子节点
        hideInMenu: false,
      },
      {
        path: '/info/registry',
        name: '注册',
        // 在面包屑中隐藏
        hideInBreadcrumb: true,
        // 在菜单中隐藏自己和子节点
        hideInMenu: false,
      },
      {
        path: '/info/edit',
        name: '修改',
        // 在面包屑中隐藏
        hideInBreadcrumb: true,
        // 在菜单中隐藏自己和子节点
        hideInMenu: false,
      },
      {
        path: '/info/remove',
        name: '注销',
        // 在面包屑中隐藏
        hideInBreadcrumb: true,
        // 在菜单中隐藏自己和子节点
        hideInMenu: false,
      },
    ],
  },
  /**---------------------------------------- 账户相关 end ----------------------------------------*/
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
