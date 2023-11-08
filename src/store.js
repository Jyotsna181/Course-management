import { createStore, combineReducers } from 'redux';
import courseReducer from './reducers/coursesReducer';
import enrollmentReducer from './reducers/enrollmentReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  enrollments: enrollmentReducer,
});

const store = createStore(rootReducer);

export default store;
