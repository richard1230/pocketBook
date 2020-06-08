import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  });

  type Selected = typeof selected;
  const onChangeState = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };


  return (
    <MyLayout>
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
                        onOk={() => {}}

      />

    </MyLayout>
  );
}

export default Money;


