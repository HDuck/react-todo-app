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

const CreateTaskPanel = () => (
  <Form action="#">
    <TextInput placeholder="New task?" />
    <DateInput placeholder="Deadline.." delimeter="." />
    <BaseButton action="addTask">add task</BaseButton>
  </Form>
);

export default CreateTaskPanel;
