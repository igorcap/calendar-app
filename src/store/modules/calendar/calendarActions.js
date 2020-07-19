import MODULE_NAME from "./calendarConstants";

export const CREATE_REMINDER = `${MODULE_NAME}/CREATE_REMINDER`;
export const OPEN_REMINDER_EDIT = `${MODULE_NAME}/OPEN_REMINDER_EDIT`;
export const CLOSE_REMINDER_EDIT = `${MODULE_NAME}/CLOSE_REMINDER_EDIT`;
export const CHANGE_SELECTED_REMINDER = `${MODULE_NAME}/CHANGE_SELECTED_REMINDER`;

export const REQUEST_WEATHER = {
  FAILED: `${MODULE_NAME}/REQUEST_WEATHER_FAILED`,
  REQUESTED: `${MODULE_NAME}/REQUEST_WEATHER_REQUESTED`,
  SUCCEEDED: `${MODULE_NAME}/REQUEST_WEATHER_SUCCEEDED`,
};

export const createReminder = ({ reminder, date, city, color }) => ({
  type: CREATE_REMINDER,
  payload: {
    reminder,
    date,
    city,
    color,
  },
});

export const openReminderEdit = () => ({
  type: OPEN_REMINDER_EDIT,
});

export const closeReminderEdit = () => ({
  type: CLOSE_REMINDER_EDIT,
});

export const changeSelectedReminder = ({ dateString, time }) => ({
  type: CHANGE_SELECTED_REMINDER,
  payload: {
    dateString,
    time,
  },
});

export const requestWeatherRequest = ({ city }) => ({
  type: REQUEST_WEATHER.REQUESTED,
  payload: {
    city,
  },
});

export const requestWeatherSucceeded = (data) => ({
  type: REQUEST_WEATHER.SUCCEEDED,
  payload: data,
});
