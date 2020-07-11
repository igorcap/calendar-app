import { createStore, compose, applyMiddleware } from "redux";

export default (reducers, middlewares) => {
  const enhancer = compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return createStore(reducers, enhancer);
};
