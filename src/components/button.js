import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 36px;
  color: #fcecc4;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #37895a;
  border: 2px solid #37895a;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: #46763e;
  }

  :focus {
    background-color: #fcecc4;
    color: #37895a;
    border-color: #37895a;
  }
`;

const Button = ({ name }) => <StyledButton href="#">{name}</StyledButton>;

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
