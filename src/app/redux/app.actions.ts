import { createAction, props } from "@ngrx/store";
import { AnswerQuestionProps } from "./app.types";

export const reset = createAction(
  '[User] Reset'
);

export const answerQuestion = createAction(
  '[User] Answer question',
  props<AnswerQuestionProps>()
);
