// ThankYouPage.jsx placeholder
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';

const ThankyouPage = () => {
  const navigate = useNavigate();

  const handleGoToCourses = () => {
    navigate('/courses');
  };

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing auth, redirect)
    // For now, just navigate to login page
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-green-50">
      <h1 className="text-4xl font-bold mb-4 text-green-700">Thank You!</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        You have successfully completed the course. We hope you enjoyed learning about Generative AI!
      </p>
      <div className="flex gap-4">
        <Button onClick={handleGoToCourses}>Explore More Courses</Button>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>
    </div>
  );
};

export default ThankyouPage;
