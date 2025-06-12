// ThankYou.jsx placeholder
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Congratulations on completing the course. We hope you found it valuable and engaging.
      </p>
      <Link
        to="/courses"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Back to Courses
      </Link>
    </div>
  );
};

export default ThankYou;
