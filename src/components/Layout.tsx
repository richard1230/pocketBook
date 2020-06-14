import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
//border: 1px solid red; 
height: 100vh; 
display: flex;
//使得结构变为上下结构
flex-direction: column;
//行高
`;

const Main = styled.div`
//border: 1px solid green;
flex-grow: 1;
overflow: auto;
`;

// const Layout =(props:any )=>{
type Props ={
  className?: string;
  scrollTop?:number;
}

const Layout: React.FC<Props> = (props )=>{
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    setTimeout(()=>{
      if (!mainRef.current){
        return;
      }
      console.log(props.scrollTop)
      mainRef.current.scrollTop = props.scrollTop!;
      console.log(mainRef.current.scrollTop);
    },0);
  },[props.scrollTop])
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className} data-x={'richard'}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}

Layout.defaultProps = {
  scrollTop:0
};

export default Layout


