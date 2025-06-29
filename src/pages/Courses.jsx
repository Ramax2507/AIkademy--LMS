// Courses.jsx placeholder
import React from 'react';
import { useNavigate } from 'react-router-dom';
import courses from '../data/courses';
import CourseCard from '../components/Course/CourseCard';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Sidebar from '../components/Layout/Sidebar';

const Courses = () => {
  const navigate = useNavigate();

  const handleEnrollClick = (courseId) => {
    // Navigate to course description page on enroll click
    navigate(`/courses/${courseId}`);
  };

  return (
    <>
    <Header/>
    
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={() => handleEnrollClick(course.id)
              
            }
          />
        ))}
      </div>
    </div>
    <Footer/>
  </>
);
};

export default Courses;
