import styled from 'styled-components';
import React from 'react';

const _TagsSection = styled.section`
    background:#FFFFFF;
    //border: 1px solid red;
    padding: 12px 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
> ol{
  margin: 0 -12px;
  >li{
  background:#D9D9D9; 
  border-radius:18px ;
  display: inline-block;
  padding: 3px 18px;
  font-size: 14px;
  margin: 8px 12px;
  }
}
> button{
  background:none;
  border:none;
  padding: 2px 4px;
  //加下划线
  border-bottom: 1px solid #333;
  color: #666;
  margin-top: 8px ;
}
`;

//FunctionComponent就是FC
const TagsSection: React.FC = () => {
  return (
    <_TagsSection>
      <ol>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>

      <button>
        新增标签
      </button>
    </_TagsSection>
  );
};


export {TagsSection};