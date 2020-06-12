import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
type Category = '-' | '+'


const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}

function Money() {
  console.log('money 执行了');
  const [selected, setSelected] = useState(defaultFormData);

  const {records,addRecord} = useRecords();
  // console.log('records');
  // console.log(records)
  // type Selected = typeof selected;
  const onChangeState = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  const submit = () => {
    addRecord(selected);
    alert('保存成功')
    setSelected(defaultFormData)
  }


  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <hr/>
      {/*用于测试,显示数据用的*/}
      {/*{selected.tagIds.join(',')}*/}
      {/*<hr/>*/}
      {/*{selected.note}*/}
      {/*<hr/>*/}
      {/*{selected.category}*/}
      {/*<hr/>*/}
      {/*{selected.amount}*/}
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChangeState({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChangeState({note})}/>
      <CategorySection value={selected.category}
                       onChange={(category) => onChangeState({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChangeState({amount})}
                        onOk={submit}

      />

    </MyLayout>
  );
}

export default Money;


