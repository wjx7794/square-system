import { fetchLogout, fetchUserInfo } from '@/utils/api';
import { message } from 'antd';
import { useCallback, useEffect } from 'react';

const useLogin = (params: any) => {
  const { setUserInfo } = params || {};

  // 获取用户登陆信息
  const getUserInfo = useCallback(async () => {
    try {
      const res: any = await fetchUserInfo();
      const newUserInfo = res?.data?.passport?.userInfo || {};
      setUserInfo(newUserInfo);
      console.log('🍏 getUserInfo =>', newUserInfo);
    } catch (e: any) {
      console.log('🍎 getUserInfo =>', e?.info);
    }
  }, [setUserInfo]);

  // 退出登陆
  const getLogout = useCallback(async () => {
    try {
      await fetchLogout();
      message.success('退出登陆成功');
      // 刷新页面
      setTimeout(() => {
        location.reload();
      }, 1000);
    } catch (e: any) {
      console.log('🍎 getLogout =>', e?.info);
    }
  }, []);

  // 初始化
  useEffect(() => {
    getUserInfo();
  }, []);

  return {
    getUserInfo,
    getLogout,
  };
};

export default useLogin;
