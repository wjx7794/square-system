import type { RequestConfig } from '@umijs/max';
import { message } from 'antd';

export const ErrorName = 'SquareError';

export const request: RequestConfig = {
  // 1. 超时
  timeout: 1000,

  // 2. 设定统一的错误处理方案
  errorConfig: {
    /**
     * 错误抛出
     * @param data 后端返回的数据
     */
    errorThrower(res) {
      const { success, data, message, code, errMsg } = res;
      if (!success) {
        const error: any = new Error('Request Error');
        error.name = ErrorName;
        error.info = { success, data, message, code, errMsg };
        // 抛出自制的错误
        throw error;
      }
    },
    /**
     * 错误接收及处理
     * @param error errorThrower 抛出的错误
     * @param opts 请求 opts
     */
    errorHandler(error: any, opts: any) {
      if (opts?.skipErrorHandler) throw error;
      // 提示后端的错误信息
      if (error.name === ErrorName) {
        message.error(error?.info?.message || error?.info?.errMsg);
      }
    },
  },

  // 3. 请求拦截器
  requestInterceptors: [
    (config) => {
      // 拦截请求配置，进行个性化处理。
      const url = config.url;
      // const url = config.url.concat('?a=1');
      return { ...config, url };
    },
  ],

  // 4. 响应拦截器
  responseInterceptors: [
    (response) => {
      return response;
    },
  ],
};
