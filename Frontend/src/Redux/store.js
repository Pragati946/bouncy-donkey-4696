import { storeReducer } from "./Store/store.reducer";
import { applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk"
import ProductDetailsreducer from "./Product_Details/ProductDetails.reducer";
const rootReducer=combineReducers({
store:storeReducer,
productdetail:ProductDetailsreducer
});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

