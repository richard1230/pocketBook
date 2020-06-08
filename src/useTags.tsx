import {useState} from 'react';
import {createId} from './lib/createId';
import {Id} from './lib/Id';


const useTags = () => {
  const [tags, setTags] = useState<{id:number;name:string}[]>([
    {id:(new Id).value,name:'衣'},
    {id:(new Id).value,name:'食'},
    {id:(new Id).value,name:'住'},
    {id:(new Id).value,name:'行'},
  ]);
  return {tags: tags, setTags: setTags};
};

export {useTags};

