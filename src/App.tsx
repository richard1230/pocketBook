import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
//border: 1px solid red; 
height: 100vh; 
display: flex;
//使得结构变为上下结构
flex-direction: column;
`;

const Main = styled.div`
//border: 1px solid green;
flex-grow: 1;
overflow: auto;
`;

const Nav = styled.nav`
border: 1px solid blue;
> ul{
display: flex;
> li{
width: 33.333333%;
text-align: center;
padding: 16px;
}
}
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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>
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
