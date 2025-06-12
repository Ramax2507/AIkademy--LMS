// AssessmentPage.jsx placeholder
import React, { useState } from 'react';
import assessments from '../data/assessments'; // your MCQs data
import ProgressBar from '../components/UI/ProgressBar';
import Button from '../components/UI/Button';

const Assessmentpage = () => {
  const questions = assessments; // or assessments for the selected course

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQIndex];

  const handleOptionChange = (e) => {
    setAnswers({
      ...answers,
      [currentQIndex]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(currentQIndex - 1);
    }
  };

  const handleSubmit = () => {
    // Calculate score
    let calculatedScore = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setShowResult(true);
  };

  if (showResult) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Assessment Complete</h2>
        <p className="mb-4">
          Your score: {score} out of {questions.length}
        </p>
        <Button onClick={() => window.location.reload()}>Retake Assessment</Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-2">
        Question {currentQIndex + 1} of {questions.length}
      </h2>

      <ProgressBar progress={((currentQIndex + 1) / questions.length) * 100} />

      <div className="mt-4">
        <p className="mb-4">{currentQuestion.question}</p>
        <form>
          {currentQuestion.options.map((option, idx) => (
            <label key={idx} className="block mb-2 cursor-pointer">
              <input
                type="radio"
                name={`question-${currentQIndex}`}
                value={option}
                checked={answers[currentQIndex] === option}
                onChange={handleOptionChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </form>
      </div>

      <div className="mt-6 flex justify-between">
        <Button onClick={handlePrev} disabled={currentQIndex === 0}>
          Previous
        </Button>

        {currentQIndex < questions.length - 1 ? (
          <Button onClick={handleNext} disabled={!answers[currentQIndex]}>
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!answers[currentQIndex]}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Assessmentpage;
