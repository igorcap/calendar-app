import { createSelector } from "reselect";
import { fromJS } from "immutable";
import moment from "moment";

import MODULE_NAME from "./calendarConstants";

export const currentDate = (state) => state[MODULE_NAME].get("currentDate");
export const getAllReminders = (state) =>
  state[MODULE_NAME].get("reminders", fromJS({}));
export const isPopupOpen = (state) =>
  state[MODULE_NAME].get("popupIsOpen", false);
export const getSelectedDate = (state) =>
  state[MODULE_NAME].get("selectedDate");
export const getSelectedTime = (state) =>
  state[MODULE_NAME].get("selectedTime");
export const getCurrentCityWeather = (state) =>
  state[MODULE_NAME].get("currentCity", fromJS({}));

export const firstDayOfMonth = createSelector(currentDate, (date) =>
  moment(date).startOf("month").format("d")
);

export const daysInMonth = createSelector(currentDate, (date) =>
  moment(date).daysInMonth()
);

export const selectedMonth = createSelector(currentDate, (date) =>
  moment(date).month()
);

export const selectedYear = createSelector(currentDate, (date) =>
  moment(date).year()
);

export const getSelectedReminder = createSelector(
  getAllReminders,
  getSelectedDate,
  getSelectedTime,
  (reminders, date, time) => reminders.getIn([date, time], fromJS({}))
);
