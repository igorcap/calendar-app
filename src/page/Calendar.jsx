import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

// import * as calendar from "../store/modules/calendar";

import WeekDayList from "../components/WeekDayList";
import MonthDayList from "../components/MonthDayList";

const Container = styled.div`
  width: 100%;
`;

const Table = styled.table`
  display: block;
`;

const Calendar = () => {
  return (
    <Container>
      <Table>
        <thead>
          <WeekDayList />
        </thead>
        <tbody>
          <MonthDayList />
        </tbody>
      </Table>
    </Container>
  );
};

Calendar.propTypes = {};

const mapDispatchToProps = {};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
