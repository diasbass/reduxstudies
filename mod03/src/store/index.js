import { createStore, compose, applyMiddleware } from "redux";
import createSagaMideware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMideware();

const middlewares = [sagaMiddleware];

const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...[middlewares]),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...[middlewares]);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
