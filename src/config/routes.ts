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
  },
];

/**
 * 左侧菜单配置
 */
export const menuData = [
  // 根路径
  {
    path: '/',
    redirect: '/home',
  },
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
];
