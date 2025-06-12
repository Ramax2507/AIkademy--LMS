// App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // This import is usually only in main.jsx/index.js

import AppRouter from './routes/AppRouter';
import { AuthProvider } from './context/AuthContext';
import { CourseProvider } from './context/CourseContext';
import { GoogleOAuthProvider } from '@react-oauth/google'; // <--- IMPORT THIS

import './index.css'; // Tailwind CSS entry point

const App = () => {
  // IMPORTANT: Replace 'YOUR_GOOGLE_CLIENT_ID' with your actual Client ID
  // You might want to store this in an environment variable (e.g., process.env.VITE_GOOGLE_CLIENT_ID for Vite)
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    // Wrap your entire application with GoogleOAuthProvider
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}> {/* <--- WRAP IT HERE */}
      <AuthProvider>
        <CourseProvider>
          <div className="min-h-screen bg-gray-50">
            <AppRouter />
          </div>
        </CourseProvider>
      </AuthProvider>
    </GoogleOAuthProvider> // <--- AND CLOSE IT HERE
  );
};

export default App;