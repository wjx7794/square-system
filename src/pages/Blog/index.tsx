import { MicroApp } from '@umijs/max';
import { Spin } from 'antd';
import { useRef, useState } from 'react';
import styles from './styles.less';

const Blog: React.FC = () => {
  const microAppRef = useRef(null);
  const [globalState, setGlobalState] = useState<any>({
    slogan: 'component way',
  });

  // 执行此方法时，更新子应用
  // const updateMicroApp = () => {
  //   microAppRef.current?.update();
  // };

  // useEffect(() => {
  //   updateMicroApp();
  // }, []);

  return (
    <div>
      <MicroApp
        name="blog"
        ref={microAppRef}
        globalState={globalState}
        setGlobalState={setGlobalState}
        autoSetLoading
        wrapperClassName={styles.wrapper}
        // 自定义的微应用加载状态组件
        loader={(loading) => {
          // 打印 loading 只取首次，不会响应式变化
          return (
            <div className={styles.loading}>
              <Spin spinning={loading} />
            </div>
          );
        }}
        // 自动设置微应用的错误捕获
        autoCaptureError
      />
    </div>
  );
};

export default Blog;
