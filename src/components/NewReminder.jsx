import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

import { createReminder } from '../store/modules/calendar/calendarActions';

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

const NewReminder = () => {
   const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();
  const [date, setDate] = useState(new Date());
  
  const onSubmit = (values) => {
    dispatch(createReminder({ ...values, date }))
  };


  return (
    <Container>
      <Title>New Reminder</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Block>
          <label>Reminder:</label>
          <textarea
            name="reminder"
            ref={register({
              required: "Required",
            })}
          />
          {errors.reminder && errors.reminder.message}
        </Block>
        <Block>
          <label>Date and Time:</label>
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
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
            />
            {errors.city && errors.city.message}
        </Block>
        <Block>
          <label>Color:</label>
          <input
            name="color"
            ref={register({
              required: "Required",
            })}
            />
            {errors.color && errors.city.message}
        </Block>
          <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default NewReminder;
