import MODULE_NAME from './calendarConstants';

export const CREATE_REMINDER = `${MODULE_NAME}/CREATE_REMINDER`;

export const createReminder = ({ reminder, date, city, color }) => ({
  type: CREATE_REMINDER,
  payload: {
    reminder, date, city, color
  }
})