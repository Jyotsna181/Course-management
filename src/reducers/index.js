import { combineReducers } from "redux";
import coursesReducer from "../reducers/coursesReducer";
import userReducer from "../reducers/enrollmentReducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
  user: userReducer,
});

export default rootReducer;
