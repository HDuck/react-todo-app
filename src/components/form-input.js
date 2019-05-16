import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const baseStyles = props => ({
  height: props.height ? `${props.height}px` : '17px',
  width: '100%',
  padding: props.padding ? `${props.padding}px 0px` : '0px',
  fontFamily: 'monospace',
  border: 'none',
  outline: 'none',
});

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${props => (props.date ? '90px' : '100%')};
  margin: 0 15px 10px;
`;

const BaseInput = styled(MaskedInput)(props => baseStyles(props));

const DateInput = styled(BaseInput)`
  text-align: center;
`;

const TextInput = styled.textarea(props =>
  Object.assign({}, baseStyles(props), {
    overflow: 'auto',
    resize: 'none',
  })
);

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.primary};

  ${BaseInput}:focus + &,
  ${DateInput}:focus + &,
  ${TextInput}:focus + & {
    transform: scaleY(4);
    background-color: ${props => props.theme.colors.highlight};
    transition: transform 0.3s ease 0s, background-color 0.2s linear 0.2s;
  }
`;

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.startHeigth = 17;
    this.padding = 5;

    this.state = {
      height: this.startHeight,
    };

    this.inputComponents = {
      base: BaseInput,
      date: DateInput,
      varchar: TextInput,
    };
    this.mask = this.getMask();
    this.handleResize = this.handleResize.bind(this);
  }

  getMask() {
    const { customType, delimeter } = this.props;

    const masks = {
      base: false,
      varchar: false,
      date: [
        /\d/,
        /\d/,
        delimeter,
        /\d/,
        /\d/,
        delimeter,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ],
    };

    return masks[customType];
  }

  handleResize(event) {
    const textarea = event.target;
    const computedHeight = textarea.scrollHeight - 2 * this.padding;

    if (!textarea.value) {
      this.setState({ height: this.startHeight });
    } else {
      this.setState({ height: computedHeight });
    }
  }

  render() {
    const { customType, placeholder } = this.props;
    const { height } = this.state;
    const CustomInput = this.inputComponents[customType];
    return (
      <InputWrapper date={customType === 'date' ? 1 : 0}>
        <CustomInput
          padding={this.padding}
          height={height}
          mask={this.mask ? this.mask : undefined}
          placeholder={placeholder}
          onChange={customType === 'varchar' ? this.handleResize : null}
        />
        <BottomLine />
      </InputWrapper>
    );
  }
}

FormInput.propTypes = {
  customType: PropTypes.string,
  delimeter: PropTypes.string,
  placeholder: PropTypes.string,
};

FormInput.defaultProps = {
  customType: 'base',
  delimeter: '-',
  placeholder: "Type something a'some",
};

export default FormInput;
