// scoreUtils.js placeholder
/**
 * Calculate total correct answers from user responses
 * @param {Array} userAnswers - Array of user selected option indices, e.g. [1, 0, 3]
 * @param {Array} assessmentData - Array of question objects, each with correct answer index
 * @returns {number} Number of correct answers
 */
export function calculateScore(userAnswers, assessmentData) {
  if (!Array.isArray(userAnswers) || !Array.isArray(assessmentData)) {
    return 0;
  }

  let score = 0;

  userAnswers.forEach((answerIndex, i) => {
    if (
      assessmentData[i] &&
      typeof assessmentData[i].correctAnswer === 'number' &&
      answerIndex === assessmentData[i].correctAnswer
    ) {
      score += 1;
    }
  });

  return score;
}

/**
 * Calculate percentage score
 * @param {number} score - Number of correct answers
 * @param {number} totalQuestions - Total number of questions
 * @returns {number} Percentage score (0-100)
 */
export function calculatePercentage(score, totalQuestions) {
  if (totalQuestions === 0) return 0;
  return Math.round((score / totalQuestions) * 100);
}
