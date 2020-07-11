import moment from "moment";

const initialState = {
  currentDate: moment(),
};

const calendar = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default calendar;
