import { defineConfig } from '@umijs/max';
import { routes } from './src/config/routes';

export default defineConfig({
  // 微前端
  qiankun: {
    master: {},
  },
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
    theme: { token: { colorPrimary: 'red' } },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  // 路由配置
  routes,
  npmClient: 'pnpm',
});
