// ProgressBar.jsx placeholder
import React from 'react';

const ProgressBar = ({ value = 0, max = 100 }) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="bg-blue-600 h-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
