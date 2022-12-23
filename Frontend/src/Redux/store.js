// import { storeReducer } from "./Store/store.reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import ProductDetailsReducer from "./Product_Details/ProductDetails.reducer";
import { getDataReducer } from "./GetData/getData.reducer";
import { buttonReducer } from "./ButtonRoute/button.reducer";
import CartReducer from "./cart/Cart.reducer";
import { AuthReducer } from "./Auth/Auth.reducer";
import { navReducer } from "./NavBarToggle/reducer";
const rootReducer = combineReducers({
  productdetail: ProductDetailsReducer,
  getData: getDataReducer,
  button: buttonReducer,
  cart: CartReducer,
  auth: AuthReducer,
  navToggle:navReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

