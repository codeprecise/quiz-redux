import { createReducer, on } from "@ngrx/store";
import { answerQuestion, reset } from "./app.actions";
import { isAnswerCorrect } from "./app.helpers";
import { AppState, INITIAL_APP_STATE } from "./app.state";
import { AnswerQuestionProps } from "./app.types";

export const appReducer = createReducer(
  INITIAL_APP_STATE,

  on(reset, () => INITIAL_APP_STATE),
  on(answerQuestion, onAnswerQuestion)
);

function onAnswerQuestion(state: AppState, props: AnswerQuestionProps): AppState {
  const { answerIndex } = props;

  return {
    ...state,
    answers: [
      ...state.answers,
      {
        userAnswerIndex: answerIndex,
        isCorrect: isAnswerCorrect(state, answerIndex)
      }
    ]
  }
}
