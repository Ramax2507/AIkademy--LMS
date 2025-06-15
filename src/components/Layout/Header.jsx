// Header.jsx placeholder
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.jsx'; // Optional custom hook to track login status

const Header = () => {
  const { user, logout } = useAuth(); // Assumes a useAuth hook for auth state
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Your logout logic
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          GenAI Learn
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:block">
          <Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </nav>

        {/* User Area */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-gray-700 hidden md:inline">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
