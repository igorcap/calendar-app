import moment from "moment";
import * as actions from './calendarActions';

const initialState = {
  currentDate: moment(),
  reminders: []
};

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_REMINDER: {
      state.reminders.push(action.payload)
      return state;
    } 
    default:
      return state;
  }
};

export default calendar;
