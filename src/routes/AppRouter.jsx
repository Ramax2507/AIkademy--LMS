// AppRouter.jsx placeholder
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';

import LoginPage from '../pages/Login';              // Your login page component
import Courses from '../pages/Courses';                   // Courses listing
import Coursedescription from '../pages/CourseDescription'; // Course details/enroll
import Modulecontent from '../pages/ModuleContent';       // Module pages
import Assessmentpage from '../pages/AssessmentPage';     // Assessment MCQ page
import ThankyouPage from '../pages/ThankYouPage';         // Thank you page

import { AuthContext } from '../context/AuthContext';

// Simple wrapper to protect private routes
const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }
  return children;
};

const AppRouter = () => (
  <Router>
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <RequireAuth>
            <Navigate to="/courses" replace />
          </RequireAuth>
        }
      />

      <Route
        path="/courses"
        element={
          <RequireAuth>
            <Courses />
          </RequireAuth>
        }
      />

      <Route
        path="/courses/:courseId"
        element={
          <RequireAuth>
            <Coursedescription />
          </RequireAuth>
        }
      />

      <Route
        path="/courses/:courseId/modules/:moduleNumber"
        element={
          <RequireAuth>
            <Modulecontent />
          </RequireAuth>
        }
      />

      <Route
        path="/courses/:courseId/assessment"
        element={
          <RequireAuth>
            <Assessmentpage />
          </RequireAuth>
        }
      />

      <Route
        path="/thankyou"
        element={
          <RequireAuth>
            <ThankyouPage />
          </RequireAuth>
        }
      />

      {/* Catch all: redirect unknown to login or 404 */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </Router>
);

export default AppRouter;
