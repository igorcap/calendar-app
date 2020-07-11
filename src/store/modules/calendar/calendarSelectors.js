import { createSelector } from "reselect";
import moment from "moment";

import MODULE_NAME from "./calendarConstants";

export const currentDate = (state) => state[MODULE_NAME].currentDate;

export const firstDayOfMonth = createSelector(currentDate, (date) =>
  moment(date).startOf("month").format("d")
);

export const daysInMonth = createSelector(currentDate, (date) =>
  moment(date).daysInMonth()
);
