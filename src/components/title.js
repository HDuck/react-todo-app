import React from 'react';
import styled from 'styled-components';

const Message = styled.h1`
  grid-column: 2 / 4;
  align-self: end;
  margin: 20px;
  padding: 7px 00;
  color: ${props => props.theme.colors.secondary};
  cursor: default;
  text-align: center;
`;

const Highlight = styled.span`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.colors.highlight};
  text-transform: uppercase;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${props => props.theme.colors.highlight};
  }
`;

const Title = () => (
  <Message>
    What <Highlight>to</Highlight>day we <Highlight>do</Highlight>?
  </Message>
);

export default Title;
