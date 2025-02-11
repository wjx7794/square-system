/**
 * [注销]
 * @author Jack
 * @Date 2025-02-11
 */
// 内部模块
import { PageContainer } from '@ant-design/pro-components';
import { useLocation } from '@umijs/max';
import { Button, Form, Input, message } from 'antd';
import { useCallback, useEffect } from 'react';
// 外部模块
import { RUN_URL } from '@/constants/index';
import { fetchInfoRemove, fetchLogout } from '@/utils/api';

const InfoRemove: React.FC = () => {
  // 路径信息
  const locationInfo = useLocation();
  const fromState: any = locationInfo?.state || {};
  // form 实例
  const [form] = Form.useForm();

  // 设置路径信息中的账号名
  useEffect(() => {
    form.setFieldsValue({
      userName: fromState?.userName,
    });
  }, [form, fromState?.userName]);

  // 注销账号
  const onRemove = useCallback(async (values: any) => {
    const { userName, password } = values || {};
    try {
      await fetchInfoRemove({
        userName,
        password,
      });
      message.success('注销账号成功');
      // 退出登陆
      await fetchLogout();
      // 刷新页面
      setTimeout(() => {
        location.href = RUN_URL;
      }, 1000);
    } catch (e: any) {
      console.log('🍎 getRemove =>', e?.info);
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
        title: '注销账号',
      }}
    >
      <Form
        form={form}
        name="basic"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onRemove}
        onFinishFailed={onFailed}
        autoComplete="off"
      >
        {/* 账号 */}
        <Form.Item
          label="账号"
          name="userName"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input disabled={fromState?.userName} />
        </Form.Item>

        {/* 密码 */}
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* 注销账号 */}
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            注销账号
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default InfoRemove;
