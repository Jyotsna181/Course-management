import './course.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { enrollCourse } from '../../actions/enrollmentActions'; 
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  selectedCourse: state.courses.selectedCourse,
});

const CourseDetails = ({ selectedCourse, enrollCourse }) => {
    if (!selectedCourse) {
        return <div>No course selected</div>;
      }
  const { id, name: courseName } = selectedCourse;  

  const handleEnroll = () => {
    enrollCourse({
      courseId: id, 
      courseName,
      instructor,
      thumbnail,
      duration,
      enrollmentStatus,
    });
  };
  const {
    instructor,
    description,
    price,
    thumbnail,
    enrollmentStatus,
    duration,
    schedule,
    location,
    prerequisites,
    syllabus,
  } = selectedCourse;

  return (
    <div className="container">
      <h1 className="heading">Course Details</h1>
      <div className="course-inner">
        <div className="overview">
        <img className="course-img" src={`/${thumbnail}`} alt="" />
          <div className="course-head">
            <div className="c-name">
              <h4>{courseName}</h4>
            </div>
            <span>{price}</span>
          </div>
          <h5>Instructor</h5>
          <div className="tutor">
              <h6>{instructor}</h6>
          </div>
          <hr />
          <h5>Description</h5>
          <p>{description}</p>
          <hr />
          <h5>Schedule</h5>
          <div className="learn">
            <p>
              <span>Location:</span> {location}
            </p>
            <p>
              <span>Prerequisites:</span> {prerequisites.join(', ')}
            </p>
            <p>
              <span>Schedule:</span> {schedule}
            </p>
            <p>
              <span>Enrollment Status:</span> {enrollmentStatus}
            </p>
            <p>
              <span>Duration:</span> {duration}
            </p>
          </div>
        </div>
        <div className="extra">
          <div className="syllabus">
            <h5>Syllabus:</h5>
            <ul>
              {syllabus.map((item) => (
                <li key={item.week}>
                  <strong>Week {item.week}:</strong> {item.topic} - {item.content}
                </li>
              ))}
            </ul>
          </div>
          <div className="enroll">
            <h5>This Course Includes</h5>
            <p>
              <i className="fas fa-video"></i> {syllabus.length} videos
            </p>
            <p>
              <i className="fas fa-book"></i> {syllabus.length * 2} articles
            </p>
            <p>
              <i className="fas fa-download"></i> Downloadable resources
            </p>
            <p>
              <i className="fas fa-infinity"></i> Full Lifetime Access
            </p>
            <p>
              <i className="fas fa-certificate"></i> Certificate of Completion
            </p>

            <div className="enroll-btn">
            <Link to={`/dashboard`} className="btn" onClick={handleEnroll}>
              Enroll Course
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default connect(mapStateToProps, { enrollCourse })(CourseDetails);
