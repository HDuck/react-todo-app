import React from 'react';
import styled from 'styled-components';

const StyledWelcome = styled.h1`
  grid-column: col2 / col4;
  align-self: end;
  margin-bottom: 0;
  padding: 7px 00;
  color: #fcecc4;
  cursor: default;
  text-align: center;
  border: 1px solid #fcecc4;
  border-radius: 25px 25px 0 0 / 15px 15px 0 0;
`;

const Welcome = () => <StyledWelcome>ToDo application</StyledWelcome>;

export default Welcome;
