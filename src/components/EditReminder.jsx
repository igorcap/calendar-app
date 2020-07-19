/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

import * as calendar from "../store/modules/calendar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Title = styled.h3``;

const Block = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const EditReminder = ({
  editReminder,
  selectedReminder,
  closePopup,
  cityWeather,
}) => {
  const { reminder, date, city, color } = selectedReminder.toJS();
  const { handleSubmit, register, errors } = useForm();
  const [stateDate, setDate] = useState(date);
  const [colorState, setColor] = useState(color);

  const onSubmit = (values) => {
    editReminder({ ...values, date: stateDate, color: colorState });
    closePopup();
  };

  const changeColor = (value) => {
    setColor(value.hex);
  };
  console.log("cityWeather", cityWeather);

  return (
    <Container>
      <Title>Edit Reminder</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Block>
          <label>Reminder:</label>
          <textarea
            name="reminder"
            ref={register({
              required: "Required",
            })}
            defaultValue={reminder}
          />
          {errors.reminder && errors.reminder.message}
        </Block>
        <Block>
          <label>Date and Time:</label>
          <DatePicker
            selected={stateDate}
            onChange={(pickerDate) => setDate(pickerDate)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          {errors.date && errors.date.message}
        </Block>
        <Block>
          <label>City:</label>
          <input
            name="city"
            ref={register({
              required: "Required",
            })}
            defaultValue={city}
          />
          <p>
            {"Temperature: "}
            {cityWeather && cityWeather.main
              ? `${cityWeather.main.temp} celsius`
              : "Not found"}
          </p>
        </Block>
        <Block>
          <label>Color:</label>
          <SketchPicker color={colorState} onChangeComplete={changeColor} />
        </Block>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

const mapDispatchToProps = {
  editReminder: calendar.actions.createReminder,
  closePopup: calendar.actions.closeReminderEdit,
};

const mapStateToProps = createStructuredSelector({
  selectedReminder: calendar.selectors.getSelectedReminder,
  cityWeather: calendar.selectors.getCurrentCityWeather,
});

EditReminder.propTypes = {
  editReminder: PropTypes.func,
  closePopup: PropTypes.func,
  selectedReminder: PropTypes.object,
  cityWeather: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditReminder);
