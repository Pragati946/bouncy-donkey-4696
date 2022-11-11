
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { getDataReducer } from "./GetData/getData.reducer";
import { buttonReducer } from "./ButtonRoute/button.reducer";
import { AuthReducer } from "./Auth/Auth.reducer";
// import { storeReducer } from "./Store/store.reducer";

const rootReducer = combineReducers({
  getData: getDataReducer,
  button: buttonReducer,
  auth:AuthReducer,
  // store:storeReducer,
})
// import ProductDetailsreducer from "./Product_Details/ProductDetails.reducer";
// const rootReducer=combineReducers({




export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
