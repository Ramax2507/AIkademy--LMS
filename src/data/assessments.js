// assessments.js placeholder
// Example: Assessment questions for the course
// You can extend this with more modules or courses as needed

const assessments = {
  // Assessment for Course ID: 'course-1'
  'course-1': [
    {
      id: 'q1',
      question: 'What is Generative AI primarily used for?',
      options: [
        'Data storage',
        'Creating new content',
        'Sorting data',
        'Data encryption',
      ],
      correctAnswer: 'Creating new content',
    },
    {
      id: 'q2',
      question: 'Which model is popular for generating text?',
      options: [
        'Convolutional Neural Network (CNN)',
        'Generative Adversarial Network (GAN)',
        'Transformer-based models (e.g., GPT)',
        'Recurrent Neural Network (RNN)',
      ],
      correctAnswer: 'Transformer-based models (e.g., GPT)',
    },
    {
      id: 'q3',
      question: 'What does GAN stand for?',
      options: [
        'General Adversarial Network',
        'Generative Adversarial Network',
        'Gradient Activation Network',
        'Graphical AI Network',
      ],
      correctAnswer: 'Generative Adversarial Network',
    },
    {
      id: 'q4',
      question: 'Which of the following is NOT a typical output of Generative AI?',
      options: ['Images', 'Text', 'Audio', 'Data backup'],
      correctAnswer: 'Data backup',
    },
    {
      id: 'q5',
      question: 'Which is a key challenge in Generative AI?',
      options: [
        'Limited data generation',
        'Bias in generated content',
        'Too fast content creation',
        'Low computational cost',
      ],
      correctAnswer: 'Bias in generated content',
    },
  ],

  // You can add assessments for other courses/modules similarly
  // 'course-2': [...],
};

export default assessments;
