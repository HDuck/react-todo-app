import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import FormElementWrapper from './form-element-wrapper';

const StyledInput = styled(MaskedInput)`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 15px;
  font-family: monospace;
  text-align: inherit;
  font-size: inherit;
  border: none;
  outline: none;
`;

const BaseInput = React.forwardRef((props, ref) => (
  <FormElementWrapper className={props.className} styledElement={StyledInput}>
    <StyledInput ref={ref} placeholder={props.placeholder} mask={props.mask} />
  </FormElementWrapper>
));

BaseInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

BaseInput.defaultProps = {
  className: 'base-input',
  placeholder: "Type something a'some",
  mask: false,
};

export default BaseInput;
