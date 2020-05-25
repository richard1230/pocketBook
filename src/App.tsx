import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

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



function App() {
  return (
    <Router>
      <Wrapper>
        <Main>

          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            {/*注意:这里的字符串里面不要留空格,否则会出问题*/}
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>

        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function NoMatch() {
  return (
    <div>
      页面不存在,你输错地址了吧
    </div>
  );
}

export default App;
