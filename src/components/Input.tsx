import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
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
`
type Props = {
  label:string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input:React.FC<Props> =(props)=>{
  // input的属性就从rest里面copy
const {label,children, ...rest} = props;
  return(
    <Label>
          <span>{props.label}</span>
      {/*上面的rest里面有什么属性,这里的rest就可以从上面的rest里面去取相对应的属性*/}
      {/*由于input需要把props里面的属性一个一个地拷到input这个上面; 有几百个属性,难道需要一个一个拷贝么?这里就引入...rest，
      把除了label和children的所有属性都包含了*/}
      <input {...rest}/>
      {/*<input type={props.type} placeholder={props.placeholder}*/}
      {/*defaultValue={props.defaultValue}*/}
      {/*onBlur={props.onBlur}/>*/}
        {/*// value={note} //变为受控组件,此时在备注旁边不可以随便写了*/}
        {/*// onChange={(e) =>setNote(e.target.value)} //受控组件,现在又可以在备注旁边写了*/}
        {/*//      ref={refInput}*/}
        {/*//      defaultValue={note}*/}
        {/*//      onBlur={onBlur}*/}

    </Label>);
}


export {Input};