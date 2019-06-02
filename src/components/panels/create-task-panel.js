import React from 'react';
import PropTypes from 'prop-types';
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

    this.addTaskHandler = this.addTaskHandler.bind(this);
  }

  addTaskHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    const { addTask } = this.props;
    const textInput = this.textInp.current;
    const dateInput = this.dateInp.current.inputElement;

    const text = textInput.value;
    const deadline = dateInput.value;

    const deadlineLength = deadline.replace(/\D/g, '').length;

    if (deadlineLength && deadlineLength < 8) return;
    if (!text.trim().length) return;

    // Only way to trigger onChange event
    const nativeTextareaSetter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      'value'
    ).set;
    nativeTextareaSetter.call(textInput, '');

    const event = new Event('input', { bubbles: true });
    textInput.dispatchEvent(event);

    dateInput.value = '';

    addTask({ text, deadline });
  }

  render() {
    return (
      <Form action="#" ref={this.formRef}>
        <TextInput ref={this.textInp} placeholder="New task?" />
        <DateInput ref={this.dateInp} placeholder="Deadline.." delimeter="." />
        <BaseButton action="addTask" clickHandler={this.addTaskHandler}>
          add task
        </BaseButton>
      </Form>
    );
  }
}

CreateTaskPanel.propTypes = {
  addTask: PropTypes.func,
};

CreateTaskPanel.defaultProps = {
  addTask: evt => {
    evt.preventDefault();
    evt.stopPropagation();
  },
};

export default CreateTaskPanel;
