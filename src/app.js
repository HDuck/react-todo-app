import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Welcome from './components/welcome';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 100px;
  grid-auto-rows: 50px;
  grid-gap: 0 3%;
  width: 66%;
  margin: 0 auto;
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <StyledApp>
      <Welcome />
    </StyledApp>
  </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector('body'));
