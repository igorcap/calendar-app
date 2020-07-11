import React from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import * as calendar from "../store/modules/calendar";

const Day = styled.td`
  display: flex;
  width: 100px;
  justify-content: center;
  color: #f98909;
  padding: 10px;
  background-color: transparentize(white, 0.3);
  box-shadow: -1px -1px #f9a440, inset -1px -1px 0 0 #f9a440;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

const List = styled.tr`
  display: flex;
`;

const MonthDayList = ({ firstDayOfMonth, daysInMonth }) => {
  const blanks = [];
  for (let i = 0; i < firstDayOfMonth; i += 1) {
    blanks.push(<Day key={`empty-${i}`} empty />);
  }
  const listDaysOnMonth = [];
  for (let i = 1; i < daysInMonth; i += 1) {
    listDaysOnMonth.push(<Day key={i}>{i}</Day>);
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
    daysRow[daysRow.length - 1].push(<Day key="empty-fill" empty />);
  }

  const days = daysRow.map((day, i) => {
    // eslint-disable-next-line react/no-array-index-key
    return <List key={`list-body-calendar-${i}`}>{day}</List>;
  });

  return days;
};

const mapDispatchToProps = {};

const mapStateToProps = createStructuredSelector({
  firstDayOfMonth: calendar.selectors.firstDayOfMonth,
  daysInMonth: calendar.selectors.daysInMonth,
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthDayList);
