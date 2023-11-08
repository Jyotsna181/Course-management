import React from 'react';
import { connect } from 'react-redux';
import './student.css'

const StudentDashboard = ({ enrolledCourses }) => {
  const {
    courseName,
    instructor,
    thumbnail,
    enrollmentStatus,
    duration,
  } = enrolledCourses;
  return (
   <>
    <header>
    <h1>Dashboard</h1>
  </header>

  <div class="boxcontainer">
    <main>
      <h1>Course Enrollment List</h1>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Instructor Name</th>
            <th>Image</th>
            <th>Duration</th>
            <th>Enrollment Status</th>
          </tr>
        </thead>
        <tbody>
            {enrolledCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.courseName}</td>
                <td>{course.instructor}</td>
                <td><img src={course.thumbnail}></img></td>
                <td>{course.duration}</td>
                <td>{course.enrollmentStatus}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  </div>
   </>
  );
};

const mapStateToProps = (state) => ({
  enrolledCourses: state.enrollments.enrolledCourses,
});

export default connect(mapStateToProps)(StudentDashboard);
