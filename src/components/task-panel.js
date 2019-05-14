import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const TaskPanel = ({ update }) => (
  <StyledForm action="#">
    <FormInput update={update} />
    <FormInput update={update} customType="date" delimeter="." />
    <Button action="addTask" name="add task" />
  </StyledForm>
);

TaskPanel.propTypes = {
  update: PropTypes.number,
};

TaskPanel.defaultProps = {
  update: 0,
};

export default TaskPanel;
