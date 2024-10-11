import { MicroApp } from '@umijs/max';
import { useRef, useState } from 'react';

const Blog: React.FC = () => {
  const microAppRef = useRef(null);
  const [globalState, setGlobalState] = useState<any>({
    slogan: 'component way',
  });

  // 执行此方法时，更新子应用
  // const updateMicroApp = () => {
  //   microAppRef?.current?.update();
  // };

  // useEffect(() => {
  //   updateMicroApp();
  // }, []);

  return (
    <MicroApp
      name="blog"
      ref={microAppRef}
      globalState={globalState}
      setGlobalState={setGlobalState}
    />
  );
};

export default Blog;
