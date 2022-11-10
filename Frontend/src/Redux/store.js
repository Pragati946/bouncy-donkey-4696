
import { applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk"
import { menReducer } from "./ManProduct/man_store.reducer";
const rootReducer=combineReducers({
man:menReducer,
});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

