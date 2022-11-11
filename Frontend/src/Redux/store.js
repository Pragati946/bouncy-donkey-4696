<<<<<<< HEAD
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { getDataReducer } from "./GetData/getData.reducer";
import thunk from "redux-thunk";
import { buttonReducer } from "./ButtonRoute/button.reducer";
import { AuthReducer } from "./Auth/Auth.reducer";

const rootreducer = combineReducers({
  getData: getDataReducer,
  button: buttonReducer,
  auth:AuthReducer,
=======

// import { storeReducer } from "./Store/store.reducer";
import { applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk"
import ProductDetailsreducer from "./Product_Details/ProductDetails.reducer";
import { getDataReducer } from "./GetData/getData.reducer";
import { buttonReducer } from "./ButtonRoute/button.reducer";
const rootReducer=combineReducers({
// store:storeReducer,
productdetail:ProductDetailsreducer,
getData: getDataReducer,
  button: buttonReducer
>>>>>>> main
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
