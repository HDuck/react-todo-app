import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const StyledInput = styled(MaskedInput)`
  height: ${props => (props.height ? props.height : '17')}px;
  width: ${props => (props.date ? '25%' : '90%')};
  margin: 0 15px 10px;
  padding: ${props => (props.padding ? props.padding : '0')}px;
  background-color: none;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  outline: none;

  :focus {
    border-bottom-width: 4px;
    border-bottom-color: ${props => props.theme.colors.highlight};
    margin-bottom: 7px;
  }
`;

const StyledTextarea = styled(StyledInput)`
  overflow: none;
  resize: none;
`;

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.startHeigth = 17;
    this.padding = 3;

    this.state = {
      height: this.startHeight,
    };

    this.inputComponents = {
      date: StyledInput,
      varchar: StyledTextarea,
    };

    this.placeholder = this.getPlaceholder();
    this.mask = this.getMask();
    this.handleResize = this.handleResize.bind(this);
  }

  getPlaceholder() {
    const { customType } = this.props;

    const placeholders = {
      date: 'Deadline (DD-MM-YYYY)',
      varchar: 'Task description (ANY)',
    };

    return placeholders[customType];
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
    const { customType } = this.props;
    const { height } = this.state;
    const CustomInput = this.inputComponents[customType];
    return (
      <CustomInput
        padding={this.padding}
        height={height}
        date={customType === 'date' ? 1 : 0}
        mask={this.mask}
        placeholder={this.placeholder}
      />
    );
  }
}

FormInput.propTypes = {
  customType: PropTypes.string,
  delimeter: PropTypes.string,
};

FormInput.defaultProps = {
  customType: 'varchar',
  delimeter: '-',
};

export default FormInput;
