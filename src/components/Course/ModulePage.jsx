// ModulePage.jsx placeholder
import React, { useState } from 'react';
import modules from '../../data/modules';

const ModulePage = ({ courseId, onComplete }) => {
  const courseModules = modules[courseId] || [];
  const [moduleIndex, setModuleIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const currentModule = courseModules[moduleIndex];
  const currentPage = currentModule?.pages[pageIndex];

  const handleNext = () => {
    if (pageIndex < currentModule.pages.length - 1) {
      setPageIndex(pageIndex + 1);
    } else if (moduleIndex < courseModules.length - 1) {
      setModuleIndex(moduleIndex + 1);
      setPageIndex(0);
    } else {
      if (onComplete) onComplete(); // Notify parent component
    }
  };

  if (!currentPage) return <div>No content available.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-4">{currentModule.title}</h2>
      <h3 className="text-lg font-semibold mb-4">{currentPage.title}</h3>
      
      {currentPage.text && (
        <p className="mb-4 text-gray-700">{currentPage.text}</p>
      )}

      {currentPage.image && (
        <img
          src={currentPage.image}
          alt="module content"
          className="w-full max-h-80 object-contain rounded mb-4"
        />
      )}

      {currentPage.video && (
        <video controls className="w-full rounded mb-4">
          <source src={currentPage.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <button
        onClick={handleNext}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {moduleIndex === courseModules.length - 1 && pageIndex === currentModule.pages.length - 1
          ? 'Finish Modules'
          : 'Next'}
      </button>
    </div>
  );
};

export default ModulePage;
