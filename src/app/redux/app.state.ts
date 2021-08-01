import { Answer } from "../models/answer.model";
import { QUESTIONS } from "../models/data";
import { Question } from "../models/question.model";

export const appFeatureKey = "app";

export interface AppState {
  readonly questions: Question[];
  readonly answers: Answer[];
}

export const INITIAL_APP_STATE: AppState = {
  questions: QUESTIONS,
  answers: []
};
