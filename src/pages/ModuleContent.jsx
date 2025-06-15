import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import modulesData from '../data/modules';
import Button from '../components/UI/Button.jsx';
import ProgressBar from '../components/UI/ProgressBar.jsx';
import { CourseContext } from '../context/CourseContext';
import Sidebar from '../components/Layout/Sidebar.jsx'; // Ensure correct path

const ModuleContent = () => {
  const { courseId, moduleNumber } = useParams();
  const navigate = useNavigate();
  const moduleNum = parseInt(moduleNumber, 10);

  const { completeModule } = useContext(CourseContext);

  // Get module for current course & number
  const module = modulesData.find(
    (m) => m.courseId === courseId && m.moduleNumber === moduleNum
  );

  if (!module) {
    return <div className="p-6">Module not found.</div>;
  }

  const courseModules = modulesData.filter((m) => m.courseId === courseId);
  const totalModulesCount = courseModules.length;
  const progressPercent = (moduleNum / totalModulesCount) * 100;

  const handleNext = () => {
    completeModule(courseId, module.id);
    const nextExists = courseModules.some((m) => m.moduleNumber === moduleNum + 1);
    if (nextExists) {
      navigate(`/courses/${courseId}/modules/${moduleNum + 1}`);
    } else {
      navigate(`/courses/${courseId}/assessment`);
    }
  };

  const handlePrev = () => {
    if (moduleNum > 1) {
      navigate(`/courses/${courseId}/modules/${moduleNum - 1}`);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar for module navigation */}
      <Sidebar modules={courseModules} currentModuleId={module.id} />

      {/* Main content */}
      <div className="flex-1 p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Module {moduleNum}: {module.title}
        </h1>

        <ProgressBar progress={progressPercent} />

        <div className="my-6 space-y-6">
          {/* Render text */}
          {module.texts?.map((text, idx) => (
            <p key={idx} className="text-base leading-relaxed">{text}</p>
          ))}

          {/* Render images */}
          {module.images?.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`Module ${moduleNum} illustration ${idx + 1}`}
              className="rounded shadow max-w-full"
            />
          ))}

          {/* Render videos */}
          {module.videos?.map((videoSrc, idx) => (
            <video
              key={idx}
              src={videoSrc}
              controls
              className="w-full rounded shadow"
            />
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <Button onClick={handlePrev} disabled={moduleNum === 1}>
            Previous
          </Button>
          <Button onClick={handleNext}>
            {moduleNum === totalModulesCount ? 'Finish & Take Assessment' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
