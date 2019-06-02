import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseInput from '../common/base-input';

const StyledDateInput = styled(BaseInput)`
  width: 130px;
  text-align: center;
  align-self: start;
`;

const DateInput = React.forwardRef((props, ref) => (
  <StyledDateInput
    ref={ref}
    className="date-input"
    placeholder={props.placeholder}
    mask={[
      /\d/,
      /\d/,
      props.delimeter,
      /\d/,
      /\d/,
      props.delimeter,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]}
  />
));

DateInput.propTypes = {
  placeholder: PropTypes.string,
  delimeter: PropTypes.string,
};

DateInput.defaultProps = {
  placeholder: '',
  delimeter: '-',
};

export default DateInput;
