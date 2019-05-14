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
  color: #37895a;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #fcecc4;
  border: 2px solid #37895a;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  :hover {
    box-shadow: inset 0px 0px 5px 1px #37895a;
    transition: box-shadow 0.3s;
  }
`;

const StyledActive = styled(Styled)`
  color: #fcecc4;
  background-color: #37895a;

  :hover {
    box-shadow: 0px 0px 5px 2px #37895a;
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
