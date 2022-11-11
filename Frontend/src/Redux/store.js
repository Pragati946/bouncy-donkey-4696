
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
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
