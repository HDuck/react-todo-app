import React from 'react';
import styled from 'styled-components';
import DateInput from './date-input';
import TextInput from './text-input';
import BaseButton from '../common/base-button';

const Form = styled.form`
  display: grid;
  grid: auto / auto 175px;
  justify-items: center;
  align-items: end;
`;

class CreateTaskPanel extends React.Component {
  constructor(props) {
    super(props);

    this.textInp = React.createRef();
    this.dateInp = React.createRef();
  }


  render() {
    return (
      <Form action="#" ref={this.formRef}>
        <TextInput ref={this.textInp} placeholder="New task?" />
        <DateInput ref={this.dateInp} placeholder="Deadline.." delimeter="." />
        <BaseButton action="addTask">add task</BaseButton>
      </Form>
    );
  }
}

export default CreateTaskPanel;
