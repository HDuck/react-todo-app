import React from 'react';
import PropTypes from 'prop-types';
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
        panelName: 'CreateTaskPanel',
      },
      {
        id: 2,
        name: 'Sort Tasks',
        panelName: 'SortTasksPanel',
      },
      {
        id: 3,
        name: 'Another Button',
        panelName: 'AnotherPanel',
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
    const { panelName } = evt.target.dataset;

    if (!panelName) return;

    if (panelName !== activePanelName) {
      this.setState({ activePanelName: panelName });
    } else {
      this.setState({ activePanelName: null });
    }
  }

  render() {
    const { activePanelName } = this.state;
    const { addTaskHandler } = this.props;

    const panels = {
      CreateTaskPanel: <CreateTaskPanel addTask={addTaskHandler} />,
      SortTasksPanel: <SortTasksPanel />,
      AnotherPanel: <AnotherPanel />,
    };

    return (
      <ControlsContainer>
        <ButtonsContainer
          buttons={this.controlButtons}
          clickHandler={this.handleControls}
        />
        <PanelsContainer>
          {activePanelName && panels[activePanelName]}
        </PanelsContainer>
      </ControlsContainer>
    );
  }
}

ControlPanel.propTypes = {
  addTaskHandler: PropTypes.func,
};

ControlPanel.defaultProps = {
  addTaskHandler: evt => {
    evt.preventDefault();
    evt.stopPropagation();
  },
};

export default ControlPanel;
