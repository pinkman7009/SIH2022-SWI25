import { combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";
import grievanceReducer from "./reducers/grievanceReducer";

export default combineReducers({
  login: loginReducer,
  grievances: grievanceReducer,
});
