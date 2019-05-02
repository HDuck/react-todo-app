import React from 'react';
import styled from 'styled-components';

const StyledWelcome = styled.h1`
  grid-column-start: 2;
  grid-column-end: 4;
  align-self: end;
  margin-bottom: 0;
  color: #fbf5f3;
  background-color: #83bcff;
  cursor: default;
  text-align: center;
  border-radius: 25px 25px 0 0 / 15px 15px 0 0;
`;

const Welcome = () => <StyledWelcome>Welcome to TODO-app</StyledWelcome>;

export default Welcome;
