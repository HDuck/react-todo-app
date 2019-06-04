import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Highlighter = styled.span`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.colors.highlight};
  text-transform: uppercase;

  ${props =>
    props.bottom
      ? `&::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${props.theme.colors.highlight};
  }`
      : null}

  ${props =>
    props.top
      ? `&::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: ${props.theme.colors.highlight};
  }`
      : null}
`;

const TextHighlighter = ({ bottom, top, children }) => (
  <Highlighter bottom={bottom ? 1 : 0} top={top ? 1 : 0}>
    {children}
  </Highlighter>
);

TextHighlighter.propTypes = {
  children: PropTypes.string.isRequired,
  bottom: PropTypes.bool,
  top: PropTypes.bool,
};

TextHighlighter.defaultProps = {
  bottom: false,
  top: false,
};

export default TextHighlighter;
