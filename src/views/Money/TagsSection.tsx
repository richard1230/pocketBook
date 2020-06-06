import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';

const Wrapper = styled.section`
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
  &.selected{
  background:#f60;
  }
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

type Props = {
  value: string[];
  onChange: (selected: string[]) => void
}
//FunctionComponent就是FC
//我是一个函数组件,除了接受默认的children,还可以接受string[]类型
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();

  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为:');
    if (tagName !== null) {
      //...tags：ES6写法,表示之前的tags,
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      //如果tag已被选中,就复制所没有选中的tag,作为新的selectedTag
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  const changeTagColorOrNot = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag}
            //后面这个匿名函数作为参数传给onClick(其实这里onClick需要的就是onToggleTag),而不是后面这个匿名函数的返回值传给onClick
              onClick={() => {onToggleTag(tag);}}
            //这里是把changeTagColor(tag)返回的东西赋给className
              className={changeTagColorOrNot(tag)}
          >
            {tag}
          </li>
        )}
      </ol>

      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};