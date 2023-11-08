import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse } from '../../actions/courseActions';
import './course.css'

  
const CourseListing = ({ courses, fetchCourses, selectCourse }) => {
    useEffect(() => {
        fetchCourses(courses);
    }, [fetchCourses]);  

    return (
        <div className="container">
            <h1 className="heading">Popular Courses</h1>
            <section className="course">
                {courses.map((course) => (
                    <div className="box" key={course.id}>
                        <span className="amount">{course.price}</span>
                        <img src={course.thumbnail} alt=""/>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                        <Link to={`/course/${course.id}`} className="btn" onClick={() => selectCourse(course)}>
  View Details
</Link>
                        <div className="icons">
                            <p> <i className="far fa-calendar"></i> {course.duration} </p>
                            <p> <i className="fas fa-book"></i> 12 modules </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

const mapStateToProps = (state) => ({
    courses: state.courses.courses,
});

export default connect(mapStateToProps, { fetchCourses, selectCourse  })(CourseListing);

