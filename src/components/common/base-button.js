import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  margin: 6px;
  padding: 5px 8px;
  color: ${props =>
    props.primary
      ? props.theme.colors.secondary
      : props.theme.colors.highlight};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  background-color: ${props =>
    props.primary
      ? props.theme.colors.highlight
      : props.theme.colors.secondary};
  border: 2px solid ${props => props.theme.colors.highlight};
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  :hover {
    box-shadow: ${props => (props.primary ? '' : 'inset')} 0px 0px 5px 1px
      ${props => props.theme.colors.highlight};
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

const BaseButton = ({
  id,
  children,
  panelName,
  active,
  primary,
  clickHandler,
}) => {
  const ButtonTag = active ? StyledActive : Styled;

  return (
    <ButtonTag
      href="#"
      data-id={id}
      data-panel-name={panelName}
      onClick={clickHandler}
      primary={primary ? 1 : 0}
    >
      {children}
    </ButtonTag>
  );
};

BaseButton.propTypes = {
  id: PropTypes.number,
  children: PropTypes.node,
  panelName: PropTypes.string,
  active: PropTypes.bool,
  primary: PropTypes.bool,
  clickHandler: PropTypes.func,
};

BaseButton.defaultProps = {
  id: null,
  children: 'button',
  panelName: null,
  active: false,
  primary: false,
  clickHandler: () => {},
};

export default BaseButton;
