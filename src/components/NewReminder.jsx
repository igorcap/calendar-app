import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { SketchPicker } from "react-color";
import { useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

import { createReminder } from "../store/modules/calendar/calendarActions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-weight: 800;
  background-color: #fff;
  box-shadow: -1px -1px #f9a440, inset -1px -1px 0 0 #f9a440;
  color: #f98909;
  justify-content: center;
  line-height: 35px;
`;

const Title = styled.h3`
  margin-top: 0;
`;

const Block = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const NewReminder = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();
  const [date, setDate] = useState(new Date());
  const [color, setColor] = useState("#fff");

  const onSubmit = (values) => {
    dispatch(createReminder({ ...values, date, color }));
  };

  const changeColor = (value) => {
    setColor(value.hex);
  };

  return (
    <Container>
      <Title>New Reminder</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Block>
          Reminder:
          <textarea
            className="new-reminder__textarea"
            name="reminder"
            ref={register({
              required: "Required",
            })}
          />
          {errors.reminder && errors.reminder.message}
        </Block>
        <Block>
          Date and Time:
          <DatePicker
            selected={date}
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
          City:
          <input
            name="city"
            className="new-reminder__city"
            ref={register({
              required: "Required",
            })}
          />
          {errors.city && errors.city.message}
        </Block>
        <Block>
          Color:
          <SketchPicker color={color} onChangeComplete={changeColor} />
        </Block>
        <button className="submit-new-reminder" type="submit">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default NewReminder;
