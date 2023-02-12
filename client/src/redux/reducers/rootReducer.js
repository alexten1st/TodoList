import { combineReducers } from "redux";

import userReducer from "./userReducer";
import todosReducer from "./todosReducer";
import metaReducer from "./metaReducer"

const rootReducer = combineReducers({
  userReducer,
  todosReducer,
  metaReducer
});

export default rootReducer;
