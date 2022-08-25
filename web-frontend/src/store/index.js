import { combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";
import grievanceReducer from "./reducers/grievanceReducer";
import childReducer from "./reducers/childReducer";
import statsReducer from "./reducers/dashboardReducer";

export default combineReducers({
  login: loginReducer,
  grievances: grievanceReducer,
  children: childReducer,
  statistics: statsReducer,
});
