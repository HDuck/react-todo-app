import React from 'react';
import styled from 'styled-components';

const Message = styled.h1`
  grid-column: col2 / col4;
  align-self: end;
  margin: 20px;
  padding: 7px 00;
  color: #fcecc4;
  cursor: default;
  text-align: center;
`;

const Highlight = styled.span`
  position: relative;
  display: inline-block;
  color: #37895a;
  text-transform: uppercase;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    background-color: #37895a;
  }
`;

const Title = () => (
  <Message>
    What <Highlight>to</Highlight>day we <Highlight>do</Highlight>?
  </Message>
);

export default Title;
