import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>((defaultTags));
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

  return {tags: tags, setTags: setTags, findTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};

