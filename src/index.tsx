import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.scss"
ReactDOM.render(

  //去掉严格模式,备注输出就没有两遍重复了
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

