import { defineConfig } from '@umijs/max';
import { routes } from './src/config/routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '随便写',
  },
  // 🍏 路由配置写在此
  routes,
  npmClient: 'pnpm',
});
