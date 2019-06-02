import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseTextarea from '../common/base-textarea';

const StyledTextarea = styled(BaseTextarea)`
  grid-area: 1 / 1 / 3 / 2;
  width: 400px;
  align-self: start;
`;

const TextInput = React.forwardRef((props, ref) => (
  <StyledTextarea
    ref={ref}
    className="text-input"
    placeholder={props.placeholder}
  />
));

TextInput.propTypes = {
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: '',
};

export default TextInput;
