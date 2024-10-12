/**
 * 运行时配置
 * @author Jack
 * @Date 20241011
 */
import { qiankun, useQiankunStateForSlave } from '@/config/micro';
import { request } from '@/config/request';
import { menuData } from '@/config/routes';
import { RunTimeLayoutConfig } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<any> {
  return { title: '白菜广场', menuData };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  const { title, menuData } = initialState as any;

  return {
    // logo
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    // 左上角标题
    title,
    // 菜单相关
    menu: {
      locale: false,
      // 从服务端请求菜单
      request: async (params, defaultMenuData) => {
        return menuData;
      },
    },
    // 用来自定义菜单 menuData
    // menuDataRender: (props) => {
    //   return menuData;
    // },
    // 页面切换时触发
    onPageChange: (location) => {
      console.log('onPageChange =>', location);
    },
    // menu 菜单的头部点击事件 (logo + title)
    onMenuHeaderClick: () => {},
    // 退出登陆 callback
    logout: () => {},
    // layout 内容区的 style
    contentStyle: {
      backgroundColor: '#fff',
      // 取消内边距，让子应用紧凑些
      padding: 0,
    },
    /**---------------------------------- render 相关方法 start ------------------------------------*/
    // 渲染 logo 和 title 下面渲染一个区域
    menuExtraRender: () => {
      return <div style={{ backgroundColor: 'skyblue' }}>menuExtraRender</div>;
    },
    // 自定义头标题的方法，mix 模式和 top 模式下生效
    headerTitleRender: () => {
      return <div style={{ backgroundColor: 'skyblue' }}>menuExtraRender</div>;
    },
    // 自定义头内容的方法
    headerContentRender: () => {
      return <div style={{ backgroundColor: '#ccc' }}>headerContentRender</div>;
    },
    // 展示用户名、头像、退出登录相关组件
    rightRender: () => {
      return <div style={{ backgroundColor: 'skyblue' }}>rightRender</div>;
    },
    // 渲染 logo 和 title
    menuHeaderRender: () => {
      return <div style={{ backgroundColor: 'skyblue' }}>menuHeaderRender</div>;
    },
    // 在 layout 底部渲染一个块
    menuFooterRender: () => {
      return <div style={{ backgroundColor: 'skyblue' }}>menuFooterRender</div>;
    },
    // 自定义页脚的 render 方法
    // footerRender: () => {
    //   return <div style={{ backgroundColor: 'skyblue' }}>footerRender</div>;
    // },
    /**---------------------------------- render 相关方法 end ------------------------------------*/
  };
};

export { qiankun, request, useQiankunStateForSlave };
