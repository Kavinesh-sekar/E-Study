import React from 'react';
import courseData from '../utils/CourseData';

function Courses() {
  return (
    <>
    <div className='Learn'>Learn Best Things</div>
    <div className='course-container'>
    <h2 className='course-title'>Explore Courses by Categories</h2>
    <div className='grid'>
      {courseData.map((course) => (
        <div className='course-card' key={course.id}>
          <img src={course.image} alt={course.title} className='course-image' />
          <div className='course-content'>
            <h3 className='course-name'>{course.title}</h3>
            <p className='course-count'>{course.courses}</p>
          </div>
        </div>
      ))}
    </div>
    <button className='view-all-button'>View All Courses</button>
  </div>
  </>
);
}

export default Courses
