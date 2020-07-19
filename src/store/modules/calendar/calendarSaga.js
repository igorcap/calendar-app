import { takeLatest, call, put, all } from "redux-saga/effects";
import api, { API_KEY } from "../../../services/api";
import * as actions from "./calendarActions";

function* takeWeather({ payload }) {
  const { city } = payload;
  const response = yield call(
    api.get,
    `?q=${city}&units=metric&appid=${API_KEY}`
  );
  yield put(actions.requestWeatherSucceeded(response));
}

export default all([
  takeLatest(actions.REQUEST_WEATHER.REQUESTED, takeWeather),
]);
