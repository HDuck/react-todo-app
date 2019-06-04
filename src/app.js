import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import LocalStorage from './local-storage';
import Title from './components/title';
import TextHighlighter from './components/common/base-text-highlighter';
import ControlPanel from './components/control-panel';
import Task from './components/task';

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
  margin: 25px 0;
  color: ${props => props.theme.colors.secondary};
  font-size: 32px;
  text-align: center;
`;

class App extends React.Component {
  constructor() {
    super();

    this.storage = new LocalStorage();

    if (!this.storage.get('tasksCount')) {
      this.storage.set({ tasksCount: 0 });
    }

    const tasks = this.storage.get('tasks', { serialized: true });

    this.state = {
      tasks: tasks || [],
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(taskData) {
    const { tasks } = this.state;
    const tasksCount = parseInt(this.storage.get('tasksCount'), 10) + 1;

    tasks.unshift({
      id: tasksCount,
      text: taskData.text,
      date: taskData.deadline,
    });

    this.storage.set({ tasksCount });
    this.storage.set(tasks, 'tasks');
    this.setState({ tasks });
  }

  deleteTask(evt, id) {
    evt.preventDefault();
    evt.stopPropagation();

    const { tasks } = this.state;

    const deleteIdx = tasks.findIndex(task => task.id === id);
    if (deleteIdx !== -1) {
      tasks.splice(deleteIdx, 1);

      this.setState({ tasks });
    }
  }

  render() {
    const { tasks } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <AppContainer>
            <Title />
            <ControlPanel addTaskHandler={this.addTask} />
            <TasksContainer>
              {tasks.length ? (
                <TasksTitle>
                  <TextHighlighter top>TODO</TextHighlighter>:
                </TasksTitle>
              ) : null}
              {tasks.map(task => (
                <Task
                  key={task.id}
                  taskNumber={task.id}
                  text={task.text}
                  date={task.date}
                  deleteTaskHandler={this.deleteTask}
                />
              ))}
            </TasksContainer>
          </AppContainer>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
