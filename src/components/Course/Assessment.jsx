// Assessment.jsx placeholder
import React, { useState } from 'react';
import assessmentData from '../../data/assessments';

const Assessment = ({ courseId, onComplete }) => {
  const questions = assessmentData[courseId] || [];
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (questionIndex, selectedOption) => {
    setAnswers({
      ...answers,
      [questionIndex]: selectedOption,
    });
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) correct += 1;
    });
    setScore(correct);
    setSubmitted(true);
    if (onComplete) onComplete(); // Notify parent when assessment is done
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-6">Assessment</h2>

      {questions.map((q, index) => (
        <div key={index} className="mb-6">
          <p className="font-medium mb-2">{index + 1}. {q.question}</p>
          {q.options.map((option, i) => (
            <label key={i} className="block ml-4 mb-1">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                disabled={submitted}
                checked={answers[index] === option}
                onChange={() => handleChange(index, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      ) : (
        <div className="mt-6 text-xl font-semibold text-green-600">
          You scored {score} out of {questions.length}!
        </div>
      )}
    </div>
  );
};

export default Assessment;
