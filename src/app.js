import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Title from './components/title';
import ButtonsContainer from './components/buttons-container';
import TaskPanel from './components/task-panel';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #232534;
    font-family: sans-serif;
  }
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: [start] 1fr [col2] 1fr [col3] 1fr [col4] 1fr [end];
  grid-auto-rows: auto;
  grid-column-gap: 3%;
  align-content: start;
  width: 66%;
  margin: 0 auto;
`;

const ControlPanel = styled.div`
  grid-column: col2 / col4;
  grid-row: row2 / end;
  background-color: #fcecc4;
  border-radius: 25px 25px 25px 25px / 15px 15px 15px 15px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.controlButtons = [
      {
        id: 1,
        name: 'New Task',
        action: 'open:taskPanel',
      },
      {
        id: 2,
        name: 'Sort Tasks',
        action: 'open:sortPanel',
      },
    ];
    this.state = {
      panelName: false,
    };

    this.handleControls = this.handleControls.bind(this);
  }

  handleControls(evt) {
    evt.preventDefault();
    const { panelName } = this.state;
    const { action } = evt.target.dataset;

    if (!action) return;

    const panel = action.split(':')[1];
    if (panel !== panelName) {
      this.setState({ panelName: panel });
    } else {
      this.setState({ panelName: false });
    }
  }

  render() {
    const { panelName } = this.state;
    const controls = {
      taskPanel: <TaskPanel />,
    };
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
          <Title />
          <ControlPanel>
            <ButtonsContainer
              buttons={this.controlButtons}
              onClick={this.handleControls}
            />
            {controls[panelName]}
          </ControlPanel>
        </AppContainer>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
