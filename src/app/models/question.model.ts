export interface Question {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  userAnswerIndex?: number;
}

export type AnswerState = "Correct" | "Incorrect" | "NoAnswer";
