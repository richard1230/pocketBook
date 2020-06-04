import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
background:#f5f5f5;
padding: 0 16px;
font-size: 14px;

> label{
display: flex;
align-items: center;
  > span{
  margin-right: 16px;
  white-space: nowrap;
  }
  > input{
  height: 72px;
  display: block;
   width: 100%;
  background:none;
  border: none;
  }
}
`;

const NoteSection: React.FC = () => {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onblur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
      // console.log(refInput.current.value)
    }
  };
  return (
    <Wrapper>
      <label>
          <span>
            备注
          </span>
        <input type="text" placeholder="在这里添加属性"
          // value={note} //变为受控组件,此时在备注旁边不可以随便写了
          // onChange={(e) =>setNote(e.target.value)} //受控组件,现在又可以在备注旁边写了
               ref={refInput}
               defaultValue={note}
               onBlur={onblur}
        />
      </label>
    </Wrapper>
  );
};

export {NoteSection};