/**
 * 微前端相关
 * @author Jack
 * @Date 20241011
 */
import { useState } from 'react';

// qiankun 配置，关联子应用
export const qiankun = {
  apps: [
    // 博客
    {
      name: 'blog',
      entry: '//localhost:8001',
    },
    // 组件
    {
      name: 'component',
      entry: '//localhost:8002',
    },
  ],
  lifeCycles: {
    // 所有子应用在挂载完成时，打印 props 信息
    async afterMount(props) {
      console.log('主-props =>', props);
    },
  },
};

// 通过路由的模式引入子应用，数据透传
export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState<any>({
    slogan: 'route way',
  });

  return {
    globalState,
    setGlobalState,
  };
}
