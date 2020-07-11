import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";

import Calendar from "./page/Calendar";

function App() {
  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
}

export default App;
