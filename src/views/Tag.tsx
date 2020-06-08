import React from 'react';
import {useTags} from '../useTags';
import {
  useParams
} from "react-router-dom";
import Layout from '../components/Layout';

type Params = {
  id:string
}

const Tag :React.FC = (props)=>{
  // const {findTag}= useTags();
  // let {id} = useParams();
  // const tag = findTag(parseInt(id));
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return(
    <Layout>
      <div>
        {tag.name}
      </div> 
    </Layout>
  )
}

export {Tag};