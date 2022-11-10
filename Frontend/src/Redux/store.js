import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { getDataReducer } from "./GetData/getData.reducer";
import thunk from "redux-thunk";
import { buttonReducer } from "./ButtonRoute/button.reducer";

const rootreducer = combineReducers({
  getData: getDataReducer,
  button: buttonReducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
