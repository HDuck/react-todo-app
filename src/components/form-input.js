import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const baseStyles = props => ({
  height: props.height ? `${props.height}px` : '17px',
  width: props.date ? '25%' : '90%',
  margin: '0 15px 10px',
  padding: props.padding ? `${props.padding}px` : '0px',
  fontFamily: 'monospace',
  backgroundColor: 'none',
  border: 'none',
  borderBottom: `1px solid ${props.theme.colors.primary}`,
  outline: 'none',
  ':focus': {
    borderBottomWidth: '4px',
    borderBottomColor: props.theme.colors.highlight,
    marginBottom: '7px',
  },
});

const BaseInput = styled(MaskedInput)(props => baseStyles(props));
const TextInput = styled.textarea(props =>
  Object.assign({}, baseStyles(props), {
    overflow: 'auto',
    resize: 'none',
  })
);

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.startHeigth = 17;
    this.padding = 3;

    this.state = {
      height: this.startHeight,
    };

    this.inputComponents = {
      date: BaseInput,
      varchar: TextInput,
    };
    this.mask = this.getMask();
    this.handleResize = this.handleResize.bind(this);
  }

  getMask() {
    const { customType, delimeter } = this.props;

    const masks = {
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
      varchar: false,
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
      <CustomInput
        padding={this.padding}
        height={height}
        date={customType === 'date' ? 1 : 0}
        mask={this.mask ? this.mask : undefined}
        placeholder={placeholder}
        onChange={customType === 'varchar' ? this.handleResize : null}
      />
    );
  }
}

FormInput.propTypes = {
  customType: PropTypes.string,
  delimeter: PropTypes.string,
  placeholder: PropTypes.string,
};

FormInput.defaultProps = {
  customType: 'varchar',
  delimeter: '-',
  placeholder: "Type something a'some",
};

export default FormInput;
