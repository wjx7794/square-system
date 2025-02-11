// 执行环境
export enum ENV_ENUM {
  // 测试环境
  STAGING = 'STAGING',
  // 线上环境
  PROD = 'PROD',
}

// 域名
export enum URL_ENUM {
  // 测试环境URL
  STAGING = 'http://localhost:8000',
  // 线上环境URL
  PROD = 'http://localhost:8000',
}

// 当前环境的域名
export const RUN_URL =
  process.env.RUN_ENV === ENV_ENUM.PROD ? URL_ENUM.PROD : URL_ENUM.STAGING;

console.log('🍃 当前执行环境 =>', process.env.RUN_ENV);

// 域名
export enum SERVICE_URL_ENUM {
  // 测试环境URL
  STAGING = 'http://localhost:3000',
  // 线上环境URL
  PROD = 'http://localhost:3000',
}

// 服务器地址
export const ServicePrefix =
  process.env.RUN_ENV === ENV_ENUM.PROD
    ? SERVICE_URL_ENUM.PROD
    : SERVICE_URL_ENUM.STAGING;
