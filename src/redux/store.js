import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import createSagaMiddleware from "redux-saga";
  import someReducer from "./slice";
  import rootSaga from "./saga";
  
  const rootReducer = combineReducers({
    someReducer
  });
  
  const sagaMiddleware = createSagaMiddleware();
  
  const middleware = [...getDefaultMiddleware(), sagaMiddleware];
  
  const store = configureStore({
    reducer: rootReducer,
    middleware
  });
  
  sagaMiddleware.run(rootSaga);
  
  export default store;
  