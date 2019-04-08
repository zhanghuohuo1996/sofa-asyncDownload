import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Header from './components/Header';
import Menu from './components/Menu';
import PrintPage from './containers/PrintPage';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const BodyContainer = styled.div`
  display: flex;
  height: calc(100% - 60px);
`;

const MainContent = styled.div`
  flex: 1;
  overflow: scroll;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <AppContainer id="app-container">
        <Header />
        <BodyContainer>
          <Menu />
          <MainContent>
            <PrintPage />
          </MainContent>
        </BodyContainer>
      </AppContainer>
    );
  }
}

App.propTypes = {
}

export default App;
