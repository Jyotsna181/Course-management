const initialState = {
    enrolledCourses: [], 
  };
  
  const enrollmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ENROLL_COURSE":
        return { ...state, enrolledCourses: [...state.enrolledCourses, action.payload] };
      case "MARK_COURSE_COMPLETED":
        return state;
      default:
        return state;
    }
  };
  
  export default enrollmentReducer;
  