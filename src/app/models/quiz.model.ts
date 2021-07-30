import { Question } from "./question.model";

export interface Quiz {
  questions: Question[];
  answeredQuestions: Question[];
}
