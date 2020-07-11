import React from "react";
import styled from "styled-components";
import moment from "moment";
// import { Container } from './styles';

const Day = styled.th`
  display: flex;
  padding: 10px;
  background-color: #005c69;
  color: white;
`;

const WeekDayList = () => {
  return moment.weekdays().map((day) => <Day key={day}>{day}</Day>);
};

export default WeekDayList;
