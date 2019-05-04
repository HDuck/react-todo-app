import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Welcome from './components/welcome';
import ControlPanel from './components/control-panel';
import NewTaskPanel from './components/new-task-panel';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #232534;
    font-family: sans-serif;
  }
`;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: [start] 1fr [col2] 1fr [col3] 1fr [col4] 1fr [end];
  grid-template-rows: [start] auto [row2] 75px [end];
  grid-auto-rows: auto;
  grid-column-gap: 3%;
  align-content: start;
  width: 66%;
  margin: 0 auto;
`;

const StyledContainer = styled.div`
  grid-column: col2 / col4;
  grid-row-start: end;
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <StyledApp>
      <Welcome />
      <ControlPanel />
      <StyledContainer>
        <NewTaskPanel />
      </StyledContainer>
    </StyledApp>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
