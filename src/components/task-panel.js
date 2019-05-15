import React from 'react';
import styled from 'styled-components';
import FormInput from './form-input';
import Button from './button';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  height: 100%;
`;

const TaskPanel = () => (
  <StyledForm action="#">
    <FormInput />
    <FormInput customType="date" delimeter="." />
    <Button action="addTask" name="add task" />
  </StyledForm>
);

export default TaskPanel;
