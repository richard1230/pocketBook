import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from 'components/Layout';



function App() {
  return (
    <Router>
      {/*<Wrapper>*/}
      {/*  <Main>*/}

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

      {/*</Main>*/}
      {/*<Nav/>*/}
      {/*</Wrapper>*/}
    </Router>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  );
}

function NoMatch() {
  return (
    <div>
      页面不存在,你输错地址了吧
    </div>
  );
}

export default App;
