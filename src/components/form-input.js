import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const StyledInput = styled(MaskedInput)`
  height: 25px;
  width: ${props => (props.date ? '25%' : '90%')};
  margin: 0 15px 10px;
  background-color: none;
  border: none;
  border-bottom: 1px solid #232534;
  outline: none;

  :focus {
    border-bottom-width: 4px;
    border-bottom-color: #46763e;
    margin-bottom: 7px;
  }
`;

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    const { customType } = this.props;

    this.customType = customType;
    this.placeholder = this.getPlaceholder();
    this.mask = this.getMask();
  }

  getPlaceholder() {
    const placeholders = {
      date: 'Deadline (DD-MM-YYYY)',
      varchar: 'Task description (ANY)',
    };

    return placeholders[this.customType];
  }

  getMask() {
    const { delimeter } = this.props;

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

    return masks[this.customType];
  }

  render() {
    return (
      <StyledInput
        mask={this.mask}
        date={this.customType === 'date' ? 1 : 0}
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
