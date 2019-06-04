import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseButton from './common/base-button';

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
      this.setState({ activeButton: null });
    }
  }

  render() {
    const { activeButton } = this.state;
    const { buttons, clickHandler } = this.props;
    return (
      <StyledContainer onClick={clickHandler}>
        {buttons.map(button => (
          <BaseButton
            key={button.id}
            id={button.id}
            panelName={button.panelName}
            active={button.id === activeButton}
            clickHandler={this.setActiveButton}
          >
            {button.name}
          </BaseButton>
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
      panelName: PropTypes.string,
    })
  ),
  clickHandler: PropTypes.func,
};

ButtonsContainer.defaultProps = {
  buttons: [],
  clickHandler: () => {},
};

export default ButtonsContainer;
