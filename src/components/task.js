import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { MdCheck, MdClose } from 'react-icons/md';
import BaseButton from './common/base-button';

const TaskDescription = styled.p`
  width: 100%;
  margin: 10px 0 25px;
  line-height: 22.5px;
  letter-spacing: 0.3px;
`;
const TaskDeadline = styled.span`
  margin-bottom: 6px;
  color: #5c5f75;
  text-transform: uppercase;
`;
const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.2s ease;
`;

const TaskCard = styled.div`
  position: relative;
  margin: 50px 0;
  padding: 15px 25px;
  color: ${props => props.theme.colors.primary};
  background-color: #fcecc4;
  border-radius: 25px 25px 25px 25px / 15px 15px 15px 15px;

  &::before {
    content: 'Task #${props => props.taskNumber}';
    position: absolute;
    top: -30px;
    right: 60px;
    display: block;
    width: 100px;
    padding: 3px 0;
    color: ${props => props.theme.colors.secondary};
    font-size: 20px;
    text-align: center;
    border: 2px solid ${props => props.theme.colors.secondary};
    border-radius: 10px 10px 0 0;
  }

  ${props => {
    if (props.isDate) {
      return `
      &:hover ${ButtonsContainer} {
        opacity: 1;
        transform: translateY(40px);
      }`;
    }

    return `
    & > ${TaskDescription} {
      margin-bottom: 10px;
    }

    & > ${ButtonsContainer} {
      bottom: 50%;
      background-color: inherit;
      transform: translateY(50%);
    }

    &:hover ${ButtonsContainer} {
      opacity: 1;
    }`;
  }}
`;

const Task = ({ taskNumber, text, date, deleteTaskHandler }) => (
  <TaskCard isDate={date ? 1 : 0} taskNumber={taskNumber}>
    <TaskDescription>{text}</TaskDescription>
    {date ? <TaskDeadline>{date}</TaskDeadline> : null}
    <ButtonsContainer>
      <IconContext.Provider value={{ size: '1.5em' }}>
        <BaseButton primary>
          <MdCheck />
        </BaseButton>
        <BaseButton
          primary
          clickHandler={e => deleteTaskHandler(e, taskNumber)}
        >
          <MdClose />
        </BaseButton>
      </IconContext.Provider>
    </ButtonsContainer>
  </TaskCard>
);

Task.propTypes = {
  taskNumber: PropTypes.number,
  text: PropTypes.string,
  date: PropTypes.string,
  deleteTaskHandler: PropTypes.func,
};

Task.defaultProps = {
  taskNumber: 1,
  text: false,
  date: false,
  deleteTaskHandler: false,
};

export default Task;
