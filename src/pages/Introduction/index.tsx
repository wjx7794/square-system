import { PageContainer } from '@ant-design/pro-components';
import { Access, request, useAccess } from '@umijs/max';
import { Button, message } from 'antd';
import { useEffect } from 'react';

const Introduction: React.FC = () => {
  const access = useAccess();

  const fetchData = async () => {
    try {
      const res = await request('http://localhost:3000/list', {
        params: { b: 2 },
        timeout: 1500,
        // other axios options
        skipErrorHandler: true,
        getResponse: false,
        requestInterceptors: [],
        // 当使用 errorHandler 时，这里注册的 response 拦截器会失效，因为在 errorHandler 就会 throw error
        responseInterceptors: [],
      });
      console.log('🍎请求成功=>', res);
    } catch (e: any) {
      message.error('定制化处理错误');
      console.log('🍏请求失败 =>', e?.info);
    }
  };

  // 在组件中调用
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageContainer
      ghost
      header={{
        title: '关于我',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>Introduction</Button>
      </Access>
    </PageContainer>
  );
};

export default Introduction;
