import {useEffect,  useState} from 'react';
import {createId} from './lib/createId';
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
    console.log("after amount");
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
    console.log(' get Item')
  },[]);
  //如果tags更新了(不包含第一次更新),我就把你存起来
  useUpdate(()=>{
    console.log('set item');
    console.log(JSON.stringify(tags));
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
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag => {
        // if (tag.id === id) {
        //   //如果id是想要更新的那个id,那么id是之前的id,name是新的name
        //   // return {id:id, name:obj.name};可以简写为下面
        //   return {id, name};
        // } else {
        //   return tag;
        // }
      return tag.id === id ? {id,name:obj.name} :tag;
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

