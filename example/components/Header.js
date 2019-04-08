import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const HeaderBar = styled.div`
  height: 60px;
  width: 100%;
  background: #eee;
  display: flex;
`;

const HeadeTitle = styled.h1`
  position: absolute;
  left: 30px;
`;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <HeaderBar id="header">
        <HeadeTitle>print example</HeadeTitle>
      </HeaderBar>
    );
  }
}

Header.propTypes = {
}

export default Header;
