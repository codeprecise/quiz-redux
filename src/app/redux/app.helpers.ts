import { AnswerState } from "../models/answer.model";
import { AppState } from "./app.state";

export function isAnswerCorrect(state: AppState, answerIndex: number): boolean {
  return currentQuestion(state).correctAnswerIndex === answerIndex;
}

export function currentQuestion(state: AppState) {
  return state.questions[currentQuestionIndex(state)];
}

export function currentQuestionIndex(state: AppState) {
  return state.answers.length;
}

export function *getAnswerStates(state: AppState): Generator<AnswerState> {

  for (let i = 0; i < state.questions.length; i++) {

    if (i >= state.answers.length) {
      yield "NoAnswer";
    }
    else {
      yield state.answers[i].isCorrect
        ? "Correct"
        : "Incorrect";
    }

  }
}
