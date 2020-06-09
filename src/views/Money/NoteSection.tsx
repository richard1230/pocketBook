import styled from 'styled-components';
import React, {ChangeEventHandler, useRef} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
background:#f5f5f5;
padding: 0 16px;
font-size: 14px;


`;

type Props = {
  value: string;
  onChange: (value: string) => void;
}
const NoteSection: React.FC<Props> = (props) => {
  // const [note, setNote] = useState('');
  const note = props.value;
  // const refInput = useRef<HTMLInputElement>(null);
  //这里将非受控组件变为了受控组件
  const MyOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={MyOnChange}>
      </Input>
    </Wrapper>
  );
};

export {NoteSection};