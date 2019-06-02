import React from 'react';
import styled from 'styled-components';
import ButtonsContainer from './buttons-container';
import CreateTaskPanel from './panels/create-task-panel';
import SortTasksPanel from './panels/sort-tasks-panel';
import AnotherPanel from './panels/another-panel';

const ControlsContainer = styled.div`
  grid-column: 2 / 4;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 25px 25px 25px 25px / 15px 15px 15px 15px;
`;

const PanelsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
`;

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);

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
      {
        id: 3,
        name: 'Another Button',
        action: 'open:anotherPanel',
      },
    ];

    this.state = {
      activePanelName: false,
    };

    this.handleControls = this.handleControls.bind(this);
  }

  handleControls(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    const { activePanelName } = this.state;
    const { action } = evt.target.dataset;

    if (!action) return;

    const panel = action.split(':')[1];
    if (panel !== activePanelName) {
      this.setState({ activePanelName: panel });
    } else {
      this.setState({ activePanelName: false });
    }
  }

  render() {
    const { activePanelName } = this.state;

    const panels = {
      taskPanel: <CreateTaskPanel />,
      sortPanel: <SortTasksPanel />,
      anotherPanel: <AnotherPanel />,
    };

    return (
      <ControlsContainer>
        <ButtonsContainer
          buttons={this.controlButtons}
          clickHandler={this.handleControls}
        />
        <PanelsContainer>{panels[activePanelName]}</PanelsContainer>
      </ControlsContainer>
    );
  }
}
export default ControlPanel;
