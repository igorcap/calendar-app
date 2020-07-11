import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";

import Calendar from "./page/Calendar";
import DefaultLayout from "./page/_layouts/default";

function App() {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Calendar />
      </DefaultLayout>
    </Provider>
  );
}

export default App;
