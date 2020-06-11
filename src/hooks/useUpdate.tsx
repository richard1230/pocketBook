import {useEffect, useRef} from 'react';

//注意哪些是从外面传到里面的
export const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, deps); // 不可变数据
};

