import { Question } from "./question.model";

export const QUESTIONS: Question[] = [
  {
    question: 'What is 1 + 1?',
    answers: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswerIndex: 1
  },
  {
    question: 'What is 1 * 1?',
    answers: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswerIndex: 0
  },
  {
    question: 'What is 1 - 1?',
    answers: [
      '1',
      '2',
      '3',
      '0'
    ],
    correctAnswerIndex: 3
  },
  {
    question: 'What is 1 / 1?',
    answers: [
      '2',
      '3',
      '1',
      '4'
    ],
    correctAnswerIndex: 2
  },
];
