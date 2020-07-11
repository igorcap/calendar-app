import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import * as calendar from "../store/modules/calendar";

import WeekDayList from "../components/WeekDayList";

const Container = styled.div`
  display: flex;
`;

const Calendar = ({ currentDate }) => {
  return (
    <Container>
      <WeekDayList />
    </Container>
  );
};

Calendar.propTypes = {
  currentDate: PropTypes.object.isRequired,
};

const mapDispatchToProps = {};

const mapStateToProps = createStructuredSelector({
  currentDate: calendar.selectors.currentDate,
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
