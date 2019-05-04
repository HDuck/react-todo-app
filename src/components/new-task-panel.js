import React from 'react';
import styled from 'styled-components';
import FormInput from './form-input';

const StyledSubmit = styled.button`
  width: 120px;
  height: 36px;
  margin-top: -8px;
  color: #fcecc4;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  background-color: #37895a;
  border: 2px solid #37895a;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: #46763e;
  }

  :focus {
    background-color: #fcecc4;
    color: #37895a;
    border-color: #37895a;
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  height: 100%;
  background-color: #fcecc4;
`;

const NewTaskPanel = () => (
  <StyledForm action="#">
    <FormInput />
    <FormInput customType="date" delimeter="." />
    <StyledSubmit>Add task</StyledSubmit>
  </StyledForm>
);

export default NewTaskPanel;
