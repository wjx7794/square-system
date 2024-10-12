// 全局共享数据
import { useCallback, useState } from 'react';

const useUser = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return {
    count,
    setCount,
    increment,
  };
};

export default useUser;
