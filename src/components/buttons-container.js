import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './button';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  padding: 10px 0;
`;

class ButtonsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: false,
    };
    this.setActiveButton = this.setActiveButton.bind(this);
  }

  setActiveButton(evt) {
    evt.preventDefault();
    const { activeButton } = this.state;
    const { id } = evt.target.dataset;
    const dataId = parseInt(id, 10);

    if (activeButton !== dataId) {
      this.setState({ activeButton: dataId });
    } else {
      this.setState({ activeButton: false });
    }
  }

  render() {
    const { activeButton } = this.state;
    const { buttons, onClick } = this.props;
    return (
      <StyledContainer onClick={onClick}>
        {buttons.map(button => (
          <Button
            key={button.id}
            id={button.id}
            name={button.name}
            action={button.action}
            clicked={button.id === activeButton}
            onClick={this.setActiveButton}
          />
        ))}
      </StyledContainer>
    );
  }
}

ButtonsContainer.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      name: PropTypes.string,
      action: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};

ButtonsContainer.defaultProps = {
  buttons: [],
  onClick() {},
};

export default ButtonsContainer;
