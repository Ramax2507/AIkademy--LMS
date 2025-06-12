// CourseCard.jsx placeholder
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate(`/courses/${course.id}/description`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{course.shortDescription}</p>
      <button
        onClick={handleEnroll}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Enroll
      </button>
    </div>
  );
};

export default CourseCard;
