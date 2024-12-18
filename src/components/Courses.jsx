import React from 'react';
import courseData from '../utils/CourseData';
import '../styles/Courses.css'

function Courses() {
  return (
    <>
      <div className='Learn'>Learn Best Things</div>
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
        <div className='btn'>
        <button className='view-all-button'>View All Courses</button>
        </div>
        <div className='Apply'>
          <div className='apply-content'>
            <p> The Best Choice</p>
            <h2 className='apply-course'>Apply for Your Favouite course Today</h2>
            <button className='app-btn'>Apply</button>
          </div>
        </div>
    </>
  );
}

export default Courses
