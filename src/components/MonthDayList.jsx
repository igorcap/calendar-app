import React from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import * as calendar from "../store/modules/calendar";
import MonthDay from './MonthDay';


const List = styled.tr`
  display: flex;
  height: 120px;
`;

const MonthDayList = ({ firstDayOfMonth, daysInMonth, selectedYear, selectedMonth }) => {
  const blanks = [];
  for (let i = 0; i < firstDayOfMonth; i += 1) {
    blanks.push(<MonthDay key={`empty-${i}`} empty />);
  }
  const listDaysOnMonth = [];
  for (let i = 1; i < daysInMonth; i += 1) {
    listDaysOnMonth.push(<MonthDay dateString={`${i}-${selectedMonth}-${selectedYear}`} key={i}>{i}</MonthDay>);
  }

  const daysList = [...blanks, ...listDaysOnMonth];
  const daysRow = [];
  let cells = [];

  daysList.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      daysRow.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === daysList.length - 1) {
      daysRow.push(cells);
    }
  });

  while (daysRow[daysRow.length - 1].length < 7) {
    daysRow[daysRow.length - 1].push(
      <MonthDay key={`empty-fill-${Math.random()}`} empty />
    );
  }

  const days = daysRow.map((day, i) => {
    if (day.length > 0) {
      // eslint-disable-next-line react/no-array-index-key
      return <List key={`list-body-calendar-${i}`}>{day}</List>;
    }
    return false;
  });

  return days;
};

const mapDispatchToProps = {};

const mapStateToProps = createStructuredSelector({
  firstDayOfMonth: calendar.selectors.firstDayOfMonth,
  daysInMonth: calendar.selectors.daysInMonth,
  selectedMonth: calendar.selectors.selectedMonth,
  selectedYear: calendar.selectors.selectedYear,
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthDayList);
