// auth.js placeholder
// Key used to store user info in localStorage
const USER_KEY = 'genai-course-user';

/**
 * Save user info to localStorage
 * @param {Object} user - User object to save
 */
export function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

/**
 * Get user info from localStorage
 * @returns {Object|null} Parsed user object or null if none
 */
export function getUser() {
  const userData = localStorage.getItem(USER_KEY);
  if (!userData) return null;
  try {
    return JSON.parse(userData);
  } catch {
    return null;
  }
}

/**
 * Clear user info from localStorage (logout)
 */
export function clearUser() {
  localStorage.removeItem(USER_KEY);
}

/**
 * Check if user is logged in
 * @returns {boolean}
 */
export function isLoggedIn() {
  return getUser() !== null;
}

/**
 * Mock function to parse Google OAuth response
 * Replace with your actual logic integrating Google API client
 * @param {Object} googleResponse
 * @returns {Object} User object
 */
export function parseGoogleResponse(googleResponse) {
  // Example: extract profile info from Google OAuth response
  return {
    id: googleResponse.sub || googleResponse.googleId || 'unknown',
    name: googleResponse.name || 'Anonymous',
    email: googleResponse.email || '',
    avatar: googleResponse.picture || '',
    token: googleResponse.tokenId || '',
  };
}
