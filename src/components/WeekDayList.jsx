import React from "react";
import styled from "styled-components";
import moment from "moment";
// import { Container } from './styles';

const Day = styled.th`
  display: flex;
  padding: 10px;
  background-color: #fff;
  font-weight: 800;
  opacity: 0.7;
  box-shadow: -1px -1px #f9a440, inset -1px -1px 0 0 #f9a440;
  color: #f98909;
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
