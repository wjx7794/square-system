import { ServicePrefix } from '@/constants/index';
import { request } from '@umijs/max';

// 获取用户登陆信息
export const fetchUserInfo = async (params = {}) => {
  const res = await request(`${ServicePrefix}/auth/viewCookie`, {
    withCredentials: true,
    method: 'POST',
    skipErrorHandler: true,
    data: params,
  });
  return res;
};

// 退出登陆
export const fetchLogout = async (params = {}) => {
  const res = await request(`${ServicePrefix}/auth/logout`, {
    withCredentials: true,
    method: 'POST',
    skipErrorHandler: true,
    data: params,
  });
  return res;
};

// 登陆账号
export const fetchLogin = async (params = {}) => {
  const res = await request(`${ServicePrefix}/auth/login`, {
    withCredentials: true,
    method: 'POST',
    // skipErrorHandler: true,
    data: params,
  });
  return res;
};

// 注册账号
export const fetchRegistry = async (params = {}) => {
  const res = await request(`${ServicePrefix}/users/create`, {
    withCredentials: true,
    method: 'POST',
    // skipErrorHandler: true,
    data: params,
  });
  return res;
};

// 修改账号信息
export const fetchInfoEdit = async (params = {}) => {
  const res = await request(`${ServicePrefix}/users/edit`, {
    withCredentials: true,
    method: 'POST',
    // skipErrorHandler: true,
    data: params,
  });
  return res;
};

// 注销账号
export const fetchInfoRemove = async (params = {}) => {
  const res = await request(`${ServicePrefix}/users/remove`, {
    withCredentials: true,
    method: 'POST',
    // skipErrorHandler: true,
    data: params,
  });
  return res;
};
