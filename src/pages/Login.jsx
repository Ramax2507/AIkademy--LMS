// Login.jsx placeholder
import React from 'react';
import GoogleLoginButton from "../components/Auth/GoogleLoginButton";
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
   const { user } = useAuth();

  if (user) {
    // Already logged in, redirect to courses
    return <Navigate to="/courses" replace />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the GenAI Course</h1>
        <p className="text-gray-600 mb-6">Sign in to continue</p>
        
        <GoogleLoginButton />

        <p className="text-xs text-gray-400 mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
