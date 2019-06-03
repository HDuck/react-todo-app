import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Title from './components/title';
import TextHighlighter from './components/common/base-text-highlighter';
import ControlPanel from './components/control-panel';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.primary};
    font-family: Arial, sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#232534',
    secondary: '#fcecc4',
    highlight: '#37895a',
  },
};

const AppContainer = styled.div`
  display: grid;
  grid: auto / 150px 300px 300px 150px;
  grid-column-gap: 10px;
  justify-content: center;
`;

const TasksContainer = styled.div`
  grid-column: 2 / 4;
`;

const TasksTitle = styled.h2`
  position: relative;
  margin: 25px 0 15px;
  color: ${props => props.theme.colors.secondary};
  font-size: 32px;
  text-align: center;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(taskData) {
    const { tasks } = this.state;

    tasks.push({
      id: tasks.length + 1,
      text: taskData.text,
      date: taskData.deadline,
    });

    this.setState({ tasks });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <AppContainer>
            <Title />
            <ControlPanel addTaskHandler={this.addTask} />
            <TasksContainer>
              <TasksTitle>
                <TextHighlighter top>TODO</TextHighlighter>:
              </TasksTitle>
            </TasksContainer>
          </AppContainer>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
