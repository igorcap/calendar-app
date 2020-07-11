import { all } from "redux-saga/effects";

import calendar from "./calendar/calendarSaga";

export default function* rootSaga() {
  return yield all([calendar]);
}
