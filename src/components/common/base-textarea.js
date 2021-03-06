import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormElementWrapper from './form-element-wrapper';

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${props => props.elementHeight};
  padding: 8px 15px;
  font-family: monospace;
  text-align: inherit;
  font-size: inherit;
  border: none;
  outline: none;
  resize: none;
`;

const BaseTextarea = React.forwardRef((props, ref) => {
  const resizeTextarea = evt => {
    const textarea = evt.target;
    textarea.style.height = 'auto';

    const height = textarea.scrollHeight;

    textarea.style.height = `${height}px`;
  };

  return (
    <FormElementWrapper
      className={props.className}
      styledElement={StyledTextarea}
    >
      <StyledTextarea
        placeholder={props.placeholder}
        onChange={resizeTextarea}
        ref={ref}
      />
    </FormElementWrapper>
  );
});

BaseTextarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

BaseTextarea.defaultProps = {
  className: 'base-input',
  placeholder: "Type something a'some",
};

export default BaseTextarea;
