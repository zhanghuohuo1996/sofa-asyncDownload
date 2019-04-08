import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const MenuContainer = styled.div`
  width: 200px;
  height: 100%;
  background: #e5e5e5;
`;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <MenuContainer id="menu">
        <ul>
          <li>menu 1</li>
          <li className="different">menu 2</li>
          <li>menu 3</li>
        </ul>
      </MenuContainer>
    );
  }
}

Header.propTypes = {
}

export default Header;
