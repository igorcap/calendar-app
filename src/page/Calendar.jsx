import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import WeekDayList from "../components/WeekDayList";
import MonthDayList from "../components/MonthDayList";
import NewReminder from "../components/NewReminder";
import EditReminder from "../components/EditReminder";

import * as calendar from "../store/modules/calendar";

const Container = styled.div`
  display: flex;
`;

const Table = styled.table`
  display: block;
`;

const Calendar = ({ isOpen, toggleReminderEdit }) => {
  return (
    <>
      <Container>
        <NewReminder />
        <Table>
          <thead>
            <WeekDayList />
          </thead>
          <tbody>
            <MonthDayList />
          </tbody>
        </Table>
        <Popup open={isOpen} onClose={toggleReminderEdit}>
          <EditReminder />
        </Popup>
      </Container>
      <footer>Double click a reminder to edit.</footer>
    </>
  );
};

Calendar.propTypes = {
  isOpen: PropTypes.bool,
  toggleReminderEdit: PropTypes.func,
};

const mapDispatchToProps = {
  toggleReminderEdit: calendar.actions.closeReminderEdit,
};

const mapStateToProps = createStructuredSelector({
  isOpen: calendar.selectors.isPopupOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
