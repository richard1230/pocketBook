import Layout from '../components/Layout';
import React, {useState,useEffect} from 'react';
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


const CategoryWrapper = styled.div`
    background:#c4c4c4;
`;

function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  const {records,addRecord} = useRecords();
  const onChangeState = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  const submit = () => {
    if(addRecord(selected)){
      alert('保存成功')
      setSelected(defaultFormData)
    }
  };



  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChangeState({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChangeState({note})}/>
      {/*<CategorySection value={selected.category}*/}
      {/*                 onChange={(category) => onChangeState({category})}/>*/}
      <CategoryWrapper>
        <CategorySection value={selected.category}
                         onChange={category => onChangeState({category})}/>
      </CategoryWrapper>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChangeState({amount})}
                        onOk={submit}
      />

    </MyLayout>
  );
}

export default Money;


