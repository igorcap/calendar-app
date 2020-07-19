import moment from "moment";
import { fromJS } from "immutable";
import * as actions from "./calendarActions";

const initialState = fromJS({
  popupIsOpen: false,
  currentDate: moment(),
  reminders: fromJS({}),
  selectedDate: "",
  selectedTime: "",
  currentCity: fromJS({}),
});

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_REMINDER: {
      const { date, reminder, color, city } = action.payload;
      return state.mergeIn(
        [
          "reminders",
          `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
          `${date.getHours()}${date.getMinutes()}`,
        ],
        {
          reminder,
          color,
          city,
          date,
          time: `${date.getHours()}:${
            (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
          }`,
        }
      );
    }
    case actions.REQUEST_WEATHER.SUCCEEDED: {
      return state.merge({
        currentCity: action.payload.data,
      });
    }
    case actions.OPEN_REMINDER_EDIT:
      return state.set("popupIsOpen", true);
    case actions.CLOSE_REMINDER_EDIT:
      return state.set("popupIsOpen", false);
    case actions.CHANGE_SELECTED_REMINDER: {
      return state.merge({
        selectedDate: action.payload.dateString,
        selectedTime: action.payload.time,
      });
    }
    default:
      return state;
  }
};

export default calendar;
