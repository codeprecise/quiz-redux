export interface Answer {
  readonly userAnswerIndex: number;
  readonly isCorrect: boolean;
}

export type AnswerState = "Correct" | "Incorrect" | "NoAnswer";
