import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


//这里的console不可以删掉
//如果不写console会发生TreeShaking现象
//即:会将所对应的依赖删掉!
//将会发生2件事:
//1.symbol没了
//2.svg会不显示
// console.log(x,y)
const NavWrapper = styled.nav`
background:#ffffff;
//border: 1px solid blue;
line-height: 24px;
//设置阴影
box-shadow: 0 0 3px rgba(0,0,0,0.25);
> ul{
display: flex;
> li{
width: 33.333333%;
text-align: center;
  >a{
  display:flex;
  padding: 4px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon{
width: 24px;
height: 24px
      }
 &.selected{
color:#40B475;
    .icon{
      fill:#40B475;
    }
}
    }
  }
}
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;