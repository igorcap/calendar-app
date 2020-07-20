import { createStore, compose, applyMiddleware } from "redux";

export default (reducers, middlewares) => {
  const composeEnhancers =
    window && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : compose;
  const enhancer = compose(applyMiddleware(...middlewares), composeEnhancers);

  return createStore(reducers, enhancer);
};
