// CourseContext.jsx placeholder
import React, { createContext, useState, useEffect } from 'react';

// Create CourseContext
export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  // Example structure of your courses
  const initialCourses = [
    {
      id: 'course-1',
      title: 'Generative AI Fundamentals',
      description: 'Learn the basics of generative AI.',
      enrolled: false,
      modules: [
        { id: 'module-1', title: 'Introduction', completed: false },
        { id: 'module-2', title: 'Models', completed: false },
        // ...add up to 10 modules
      ],
      assessmentCompleted: false,
    },
    // Add more courses if needed
  ];

  const [courses, setCourses] = useState(() => {
    // Load from localStorage or default
    const saved = localStorage.getItem('genai_courses');
    return saved ? JSON.parse(saved) : initialCourses;
  });

  // Persist to localStorage when courses change
  useEffect(() => {
    localStorage.setItem('genai_courses', JSON.stringify(courses));
  }, [courses]);

  // Enroll in a course by id
  const enrollCourse = (courseId) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === courseId ? { ...course, enrolled: true } : course
      )
    );
  };

  // Mark a module as completed
  const completeModule = (courseId, moduleId) => {
    setCourses((prev) =>
      prev.map((course) => {
        if (course.id !== courseId) return course;
        const updatedModules = course.modules.map((mod) =>
          mod.id === moduleId ? { ...mod, completed: true } : mod
        );
        return { ...course, modules: updatedModules };
      })
    );
  };

  // Mark assessment as completed
  const completeAssessment = (courseId) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === courseId ? { ...course, assessmentCompleted: true } : course
      )
    );
  };

  // Get course by id helper
  const getCourseById = (courseId) => courses.find((course) => course.id === courseId);

  return (
    <CourseContext.Provider
      value={{
        courses,
        enrollCourse,
        completeModule,
        completeAssessment,
        getCourseById,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
