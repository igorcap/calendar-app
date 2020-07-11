import React from "react";
import styled from "styled-components";
import moment from "moment";
// import { Container } from './styles';

const Day = styled.th`
  display: flex;
  padding: 10px;
  background-color: #005c69;
  color: white;
  width: 100px;
  justify-content: center;
  line-height: 35px;
`;

const List = styled.tr`
  display: flex;
`;

const WeekDayList = () => {
  return (
    <List>
      {moment.weekdays().map((day) => (
        <Day key={day}>{day}</Day>
      ))}
    </List>
  );
};

export default WeekDayList;
