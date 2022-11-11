import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { getDataReducer } from "./GetData/getData.reducer";
import thunk from "redux-thunk";
import { buttonReducer } from "./ButtonRoute/button.reducer";
import { AuthReducer } from "./Auth/Auth.reducer";

const rootreducer = combineReducers({
  getData: getDataReducer,
  button: buttonReducer,
  auth:AuthReducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
