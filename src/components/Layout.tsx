import Nav from './Nav';
import React from 'react';
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

const Layout =(props:any )=>{
  return (
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}

export default Layout


