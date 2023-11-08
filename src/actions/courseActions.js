export const fetchCourses = (courses) => {
  return {
    type: 'FETCH_COURSES',
    payload: courses,
  };
};

export const selectCourse = (course) => {
  return {
    type: 'SELECT_COURSE',
    payload: course,
  };
};

export function markCourseCompleted(courseId) {
  return {
    type: 'MARK_COURSE_COMPLETED',
    payload: courseId,
  };
}