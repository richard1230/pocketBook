import {useEffect, useRef, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './hooks/useUpdate';

// const defaultTags = [
//   {id: createId(), name: '衣'},
//   {id: createId(), name: '食'},
//   {id: createId(), name: '住'},
//   {id: createId(), name: '行'},
// ];

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(()=>{
    let  localTags = JSON.parse(window.localStorage.getItem('tag') || '[]');
    if(localTags.length === 0){
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags);
  },[]);//组件挂载是执行
  //如果tags更新了(不包含第一次更新),我就把你存起来
  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags));
  },[tags])

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => {
      return tag.id === id ? {id, name: name}  :tag;
      }
    ));
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const addTag = () => {
    const tagName = window.prompt('新标签的名称为:');
    if (tagName !== null && tagName !== '') {
      //...tags：ES6写法,表示之前的tags,
      setTags([...tags,{id:createId(),name:tagName}]);
    }
  };


  return {tags: tags, setTags: setTags, findTag, updateTag, findTagIndex, deleteTag,addTag};
};

export {useTags};

