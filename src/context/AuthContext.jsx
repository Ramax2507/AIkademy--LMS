import React, { createContext, useState, useEffect, useContext } from 'react';

// Create and EXPORT the AuthContext
// This makes 'AuthContext' available for named imports in other files.
export const AuthContext = createContext(null);

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect to load user data from localStorage when the component mounts
  // This runs only once on the initial render due to the empty dependency array []
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('genai_user');
      if (storedUser) {
        // Parse the stored JSON string back into a JavaScript object
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      // Clear potentially corrupt data if parsing fails
      localStorage.removeItem('genai_user');
    } finally {
      // Set loading to false once the user data (or lack thereof) is processed
      setLoading(false);
    }
  }, []);

  // Effect to save or remove user data in localStorage whenever the 'user' state changes
  useEffect(() => {
    if (user) {
      // If user data exists, stringify it and save to localStorage
      localStorage.setItem('genai_user', JSON.stringify(user));
    } else {
      // If user is null (logged out), remove the item from localStorage
      localStorage.removeItem('genai_user');
    }
  }, [user]); // This effect re-runs whenever the 'user' state changes

  // Function to handle user login
  const login = (userData) => {
    setUser(userData);
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
  };

  return (
    // The AuthContext.Provider makes the 'value' prop available to all
    // consumer components wrapped within this provider.
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user, // Convenience boolean: true if user is not null, false otherwise
      }}
    >
      {/* 'children' prop renders whatever components are nested inside AuthProvider */}
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume the AuthContext in functional components
export const useAuth = () => {
  // useContext hook reads the current context value
  const context = useContext(AuthContext);

  // Error handling: Ensures useAuth is only called within an AuthProvider
  if (context === undefined || context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};