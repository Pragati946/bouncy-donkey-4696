import { storeReducer } from "./Store/store.reducer";
import { applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk"
const rootReducer=combineReducers({
store:storeReducer,
});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

