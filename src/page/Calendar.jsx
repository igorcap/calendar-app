import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

// import * as calendar from "../store/modules/calendar";

import WeekDayList from "../components/WeekDayList";
import MonthDayList from "../components/MonthDayList";

const Container = styled.div`
  padding: 100px;
  margin: 20px auto;
  background: #f76d1d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    top,
    #fad961,
    #f76d1d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    top,
    #fad961,
    #f76d1d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
