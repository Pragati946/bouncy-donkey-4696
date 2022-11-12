// import { storeReducer } from "./Store/store.reducer";
import { applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk"
import ProductDetailsReducer from "./Product_Details/ProductDetails.reducer";
import { getDataReducer } from "./GetData/getData.reducer";
import { buttonReducer } from "./ButtonRoute/button.reducer";
import CartReducer from "./cart/Cart.reducer";
const rootReducer=combineReducers({
productdetail:ProductDetailsReducer,
getData: getDataReducer,
  button: buttonReducer,
  cart:CartReducer
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
