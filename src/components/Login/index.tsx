// 内部模块
import { history } from '@umijs/max';
import { Button, Drawer, Popconfirm, Tag } from 'antd';
import React, { useMemo, useState } from 'react';
// 外部模块
import userIcon from '@/assets/images/user.png';
import styles from './styles.less';
import useLogin from './useLogin';

const Login: React.FC<any> = () => {
  // 用户信息
  const [userInfo, setUserInfo] = useState<any>(null);
  // 是否打开抽屉
  const [open, setOpen] = useState(false);

  // [login] hook
  const { getLogout } = useLogin({ setUserInfo });

  // 登陆状态
  const renderUseInfo = useMemo(() => {
    const { userName } = userInfo || {};

    // 1. 已登陆，查看信息
    if (!!userName) {
      return (
        <div
          className={styles.login}
          onClick={() => {
            setOpen(true);
          }}
        >
          <img className={styles.userIcon} src={userIcon} />
          <div className={styles.userName}>{userName}</div>
        </div>
      );
    }

    // 2. 未登陆
    return (
      <div className={styles.login}>
        <Tag
          color="magenta"
          className={styles.tag}
          onClick={() => {
            history.push('/login');
          }}
        >
          登陆
        </Tag>
        <Tag
          color="blue"
          className={styles.tag}
          onClick={() => {
            history.push('/registry');
          }}
        >
          注册
        </Tag>
      </div>
    );
  }, [userInfo]);

  return (
    <>
      {/* 1. 用户信息(右上角) */}
      {renderUseInfo}

      {/* 2. 抽屉 */}
      <Drawer
        title="个人信息"
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        {/* 2.1 退出登陆 */}
        <Popconfirm
          title="提示"
          description="确认退出登陆吗?"
          onConfirm={() => {
            getLogout();
          }}
          okText="确认无误"
          cancelText="保持登陆"
        >
          <Button danger>退出登陆</Button>
        </Popconfirm>
      </Drawer>
    </>
  );
};

export default Login;
