/**
 * [修改个人信息]
 * @author Jack
 * @Date 2025-02-10
 */

// 内部模块
import { PageContainer } from '@ant-design/pro-components';
import { useLocation } from '@umijs/max';
import { Button, Form, Input, message } from 'antd';
import { useCallback, useEffect } from 'react';
// 外部模块
import { RUN_URL } from '@/constants/index';
import { fetchInfoEdit, fetchLogout } from '@/utils/api';

const InfoEdit: React.FC = () => {
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

  // 修改信息
  const onEdit = useCallback(async (values: any) => {
    const { userName, password, newUserName, newPassword } = values || {};

    try {
      const res = await fetchInfoEdit({
        userName,
        password,
        newUserName,
        newPassword,
      });
      message.success(res?.message);
      // 退出登陆
      await fetchLogout();

      // 刷新页面
      setTimeout(() => {
        location.href = RUN_URL;
      }, 1000);
    } catch (e: any) {
      console.log('🍎fetchLogin =>', e?.info);
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
        title: '修改信息',
      }}
    >
      <Form
        form={form}
        name="basic"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onEdit}
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

        {/* 新账号 */}
        <Form.Item
          label="新账号"
          name="newUserName"
          rules={[{ required: true, message: '请输入新账号' }]}
        >
          <Input />
        </Form.Item>

        {/* 新密码 */}
        <Form.Item
          label="新密码"
          name="newPassword"
          rules={[{ required: true, message: '请输入新密码' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* 修改信息 */}
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            修改信息
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default InfoEdit;
