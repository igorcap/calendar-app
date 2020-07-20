/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import App from "../App";

global.MutationObserver = class {
  // eslint-disable-next-line no-empty-function
  constructor() {}

  disconnect() {}

  observe() {}
};

HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("should be able to create new reminder", () => {
  const wrapper = mount(<App />);
  wrapper
    .find(".new-reminder__textarea")
    .simulate("change", { target: { value: "my new reminder" } });
  wrapper
    .find(".new-reminder__city")
    .simulate("change", { target: { value: "Fortaleza" } });
  wrapper.find(".submit-new-reminder").simulate("click");
});
