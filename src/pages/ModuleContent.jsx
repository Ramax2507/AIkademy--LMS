// ModuleContent.jsx placeholder
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import modulesData from '../data/modules';
import Button from '../components/UI/Button.jsx';
import ProgressBar from '../components/UI/ProgressBar.jsx';
import { CourseContext } from '../context/CourseContext';

const Modulecontent = () => {
  const { courseId, moduleNumber } = useParams();
  const navigate = useNavigate();
  const moduleNum = parseInt(moduleNumber, 10);

  const { completeModule } = useContext(CourseContext);
  // Find the module for this course and module number
  const module = modulesData.find(
    (m) => m.courseId === courseId && m.moduleNumber === moduleNum
  );

  if (!module) {
    return <div className="p-6">Module not found.</div>;
  }

  // Handler for Next button
  const handleNext = () => {
  completeModule(courseId, module.id); // ✅ Mark current module complete

  const nextModuleExists = modulesData.some(
    (m) => m.courseId === courseId && m.moduleNumber === moduleNum + 1
  );

  if (nextModuleExists) {
    navigate(`/courses/${courseId}/modules/${moduleNum + 1}`);
  } else {
    navigate(`/courses/${courseId}/assessment`);
  }
};
  // Handler for Previous button
  const handlePrev = () => {
    if (moduleNum > 1) {
      navigate(`/courses/${courseId}/modules/${moduleNum - 1}`);
    }
  };

  // Calculate progress percent
  const totalModulesCount = modulesData.filter((m) => m.courseId === courseId).length;
  const progressPercent = (moduleNum / totalModulesCount) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Module {moduleNum}: {module.title}
      </h1>

      <ProgressBar progress={progressPercent} />

      <div className="my-6 space-y-6">
        {/* Render texts */}
        {module.texts && module.texts.map((text, idx) => (
          <p key={idx} className="text-base leading-relaxed">{text}</p>
        ))}

        {/* Render images */}
        {module.images && module.images.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`Module ${moduleNum} illustration ${idx + 1}`}
            className="rounded shadow max-w-full"
          />
        ))}

        {/* Render videos */}
        {module.videos && module.videos.map((videoSrc, idx) => (
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
  );
};

export default Modulecontent;
