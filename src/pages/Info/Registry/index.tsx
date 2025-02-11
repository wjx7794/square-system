/**
 * [注册]
 * @author Jack
 * @Date 2025-02-10
 */
// 内部模块
import { PageContainer } from '@ant-design/pro-components';
import { Button, Form, Input, message } from 'antd';
import { useCallback } from 'react';
// 外部模块
import { RUN_URL } from '@/constants/index';
import { fetchRegistry } from '@/utils/api';

const Registry: React.FC = () => {
  // 注册
  const onRegistry = useCallback(async (values: any) => {
    const { userName, password } = values || {};
    try {
      const res = await fetchRegistry({
        userName,
        password,
      });
      message.success(res?.message);
      // 刷新页面
      setTimeout(() => {
        location.href = RUN_URL;
      }, 1000);
    } catch (e: any) {
      console.log('🍎fetchRegistry =>', e?.info);
    }
  }, []);

  // 校验失败
  const onFailed = useCallback((errorInfo: any) => {
    console.log('🍎 校验失败 =>', errorInfo);
  }, []);

  return (
    <PageContainer
      ghost
      header={{
        title: '注册',
      }}
    >
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onRegistry}
        onFinishFailed={onFailed}
        autoComplete="off"
      >
        {/* 账号 */}
        <Form.Item
          label="账号"
          name="userName"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input />
        </Form.Item>

        {/* 密码 */}
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* 注册 */}
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default Registry;
