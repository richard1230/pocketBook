import React from 'react';
import {useTags} from '../useTags';
import {
  useParams
} from "react-router-dom";
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';

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
      <header>
        <Icon name="left"/>
        <span>
          编辑标签
        </span>
      </header>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名"
          />
        </label>
      </div>
      <div>
      <Button>
        删除标签
      </Button>
      </div>
    </Layout>
  )
}

export {Tag};