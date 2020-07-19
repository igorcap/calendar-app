import React from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { fromJS } from "immutable";
import PropTypes from "prop-types";

import * as calendar from "../store/modules/calendar";

const Day = styled.td`
  display: flex;
  flex-direction: column;
  color: #f98909;
  padding: 10px;
  background-color: white;
  font-weight: 800;
  opacity: 0.7;
  box-shadow: -1px -1px #f9a440, inset -1px -1px 0 0 #f9a440;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

const Reminder = styled.div`
  width: 80px;
  padding: 5px;
  background-color: ${(props) => props.color || "#f98909"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

const ListReminders = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const ReminderInfo = styled.div`
  line-break: anywhere;
`;

const MonthDay = ({
  children,
  dateString,
  reminders,
  changeSelectedReminderAction,
  openReminderEditAction,
  requestWeatherRequestAction,
}) => {
  const dayReminders = reminders
    .get(dateString, fromJS({}))
    .sortBy((reminder) => reminder.get("date"));
  const listReminders = [];

  const changeSelectedReminder = (time, city) => () => {
    changeSelectedReminderAction({ dateString, time });
    requestWeatherRequestAction({ city });
    openReminderEditAction();
  };

  dayReminders.forEach((reminder, index) =>
    listReminders.push(
      <Reminder
        onDoubleClick={changeSelectedReminder(index, reminder.get("city"))}
        key={reminder.get("reminder")}
        color={reminder.get("color")}
      >
        <ReminderInfo>{reminder.get("reminder")}</ReminderInfo>
        <ReminderInfo>{reminder.get("city")}</ReminderInfo>
        <ReminderInfo>{reminder.get("time")}</ReminderInfo>
      </Reminder>
    )
  );

  return (
    <Day>
      {children}
      <ListReminders>{listReminders}</ListReminders>
    </Day>
  );
};

MonthDay.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.number,
  dateString: PropTypes.string,
  reminders: PropTypes.object,
  changeSelectedReminderAction: PropTypes.func,
  openReminderEditAction: PropTypes.func,
  requestWeatherRequestAction: PropTypes.func,
};

const mapDispatchToProps = {
  changeSelectedReminderAction: calendar.actions.changeSelectedReminder,
  openReminderEditAction: calendar.actions.openReminderEdit,
  requestWeatherRequestAction: calendar.actions.requestWeatherRequest,
};

const mapStateToProps = createStructuredSelector({
  reminders: calendar.selectors.getAllReminders,
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthDay);
