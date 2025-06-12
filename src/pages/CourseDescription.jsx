// CourseDescription.jsx placeholder
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
import Button from '../components/UI/Button';

const Coursedescription = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Find course data by ID
  const course = courses.find((c) => c.id === courseId);

  // Track if user enrolled
  const [enrolled, setEnrolled] = useState(false);

  if (!course) {
    return <div className="p-6">Course not found.</div>;
  }

  const handleEnroll = () => {
    setEnrolled(true);
  };

  const handleStart = () => {
    // Navigate to first module page for this course
    navigate(`/courses/${courseId}/modules/1`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

      {course.image && (
        <img
          src={course.image}
          alt={course.title}
          className="mb-6 rounded-lg shadow-md max-h-64 w-full object-cover"
        />
      )}

      <p className="mb-6">{course.description}</p>

      {!enrolled ? (
        <Button onClick={handleEnroll}>Enroll</Button>
      ) : (
        <Button onClick={handleStart}>Start Course</Button>
      )}
    </div>
  );
};

export default Coursedescription;
