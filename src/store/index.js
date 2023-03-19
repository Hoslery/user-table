import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { filterReducer } from "./reducers/filterReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  filter: filterReducer, 
  userReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
