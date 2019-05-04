import React from 'react';
import styled from 'styled-components';
import Button from './button';

const StyledControlPanel = styled.div`
  grid-column: col2 / col4;
  grid-row: row2 / end;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fcecc4;
`;

const ControlPanel = () => (
  <StyledControlPanel>
    <Button name="New task" />
    <Button name="Check list" />
  </StyledControlPanel>
);

export default ControlPanel;
