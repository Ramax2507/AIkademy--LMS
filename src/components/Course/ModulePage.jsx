import React from 'react';
import { useParams } from 'react-router-dom';
import modules from '../../data/modules';

const ModulePage = () => {
  const { moduleNumber } = useParams();
  const moduleKey = `module-${moduleNumber}`;
  const currentModule = modules[moduleKey];

  if (!currentModule) return <div>No content available.</div>;

  const { title, content } = currentModule;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {content.title && <h3 className="text-lg font-semibold mb-4">{content.title}</h3>}
      {content.text && <p className="mb-4 text-gray-700">{content.text}</p>}

      {content.imageUrl && (
        <img
          src={content.imageUrl}
          alt="module"
          className="w-full max-h-80 object-contain rounded mb-4"
        />
      )}

      {content.videoUrl && (
        <video controls className="w-full rounded mb-4">
          <source src={content.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* You can add navigation buttons if needed later */}
    </div>
  );
};

export default ModulePage;
