/**
 * 「构建时配置」
 * 注意: 这里不能使用路径别名
 * [https://v3.umijs.org/zh-CN/config#alias]
 */

import { defineConfig } from '@umijs/max';
import { routes } from './src/config/routes';

export default defineConfig({
  // 注入环境变量 [https://github.com/umijs/umi/issues/7799]
  define: {
    'process.env': { ...process.env },
  },
  // 微前端
  qiankun: {
    master: {},
  },
  // antd 组件库
  antd: {
    // 开启暗色主题，默认 false
    dark: false,
    // 开启紧凑主题，默认 false
    compact: false,
    // 配置使用 antd 的样式，默认 less
    style: 'less',
    // 全局化配置
    configProvider: {
      // 设置样式前缀
      prefixCls: 'dbc',
    },
    // 配置 antd@5 的 theme token，等同于配置 configProvider.theme，且该配置项拥有更高的优先级
    theme: { token: { colorPrimary: '#0958d9' } },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  // 布局与菜单
  layout: {},
  // 路由配置
  routes,
  npmClient: 'pnpm',
  /**
   * [配置 favicon]
   * - 方法1: links: [{ rel: 'icon', href: '/imgs/square.svg' }],
   * - 方法2: favicons: [],
   */
  favicons: ['/imgs/square.svg'],
});
