import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 26px;
  margin: 6px;
  padding: 5px;
  color: ${props => props.theme.colors.highlight};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.secondary};
  border: 2px solid ${props => props.theme.colors.highlight};
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  :hover {
    box-shadow: inset 0px 0px 5px 1px ${props => props.theme.colors.highlight};
    transition: box-shadow 0.3s;
  }
`;

const StyledActive = styled(Styled)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.highlight};

  :hover {
    box-shadow: 0px 0px 5px 2px ${props => props.theme.colors.highlight};
  }
`;

const Button = ({ id, name, action, clicked, onClick }) => {
  if (clicked) {
    return (
      <StyledActive
        href="#"
        data-id={id}
        data-action={action}
        onClick={onClick}
      >
        {name}
      </StyledActive>
    );
  }

  return (
    <Styled href="#" data-id={id} data-action={action} onClick={onClick}>
      {name}
    </Styled>
  );
};

Button.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  action: PropTypes.string,
  clicked: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  id: 0,
  name: '',
  action: '',
  clicked: false,
  onClick() {},
};

export default Button;
