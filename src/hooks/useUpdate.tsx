import {useEffect, useRef} from 'react';

//注意哪些是从外面传到里面的
const useUpdate = (fn:()=>void,deps:any[])=>{
  const count = useRef(0);
  useEffect(()=>{
    count.current += 1;
  })
  //什么时候变化的时候做什么,只要tags变化了,就执行前面对应的函数
  useEffect(()=>{
    //等于1说明是第一次渲染，什么也不做
    if(count.current > 1){
      fn()
    }
  },deps)//每次修改都是一个新的tags
}


export {useUpdate};