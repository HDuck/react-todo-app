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

class BaseTextarea extends React.Component {
  constructor(props) {
    super(props);

    this.textarea = React.createRef();

    this.resizeTextarea = this.resizeTextarea.bind(this);
  }

  resizeTextarea() {
    const textarea = this.textarea.current;
    textarea.style.height = 'auto';

    const height = textarea.scrollHeight;

    textarea.style.height = `${height}px`;
  }

  render() {
    const { placeholder, className } = this.props;

    return (
      <FormElementWrapper className={className} styledElement={StyledTextarea}>
        <StyledTextarea
          placeholder={placeholder}
          onChange={this.resizeTextarea}
          ref={this.textarea}
        />
      </FormElementWrapper>
    );
  }
}

BaseTextarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

BaseTextarea.defaultProps = {
  className: 'base-input',
  placeholder: "Type something a'some",
};

export default BaseTextarea;
