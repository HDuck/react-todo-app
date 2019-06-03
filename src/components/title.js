import React from 'react';
import styled from 'styled-components';
import TextHighlighter from './common/base-text-highlighter';

const Message = styled.h1`
  grid-column: 2 / 4;
  align-self: end;
  margin: 20px;
  padding: 7px 00;
  color: ${props => props.theme.colors.secondary};
  font-size: 42px;
  cursor: default;
  text-align: center;
`;

const Title = () => (
  <Message>
    What <TextHighlighter bottom>to</TextHighlighter>day we{' '}
    <TextHighlighter bottom>do</TextHighlighter>?
  </Message>
);

export default Title;
