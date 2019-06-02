import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  width: 100%;
  margin: 10px;
  font-size: 15px;
`;

const Underline = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${props => props.theme.colors.primary};
  transform-origin: top left;
  transform: scaleY(0.25);
  transition: transform 0.3s ease 0s, background-color 0.2s ease 0.2s;

  ${props => props.elem}:focus + & {
    transform: scaleY(1);
    background-color: ${props => props.theme.colors.highlight};
  }
`;

const FormElementWrapper = ({ className, children, styledElement }) => (
  <InputWrapper className={className}>
    {children}
    <Underline elem={styledElement} />
  </InputWrapper>
);

FormElementWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  styledElement: PropTypes.shape({
    styledComponentId: PropTypes.string,
  }).isRequired,
};

FormElementWrapper.defaultProps = {
  className: '',
};
export default FormElementWrapper;
