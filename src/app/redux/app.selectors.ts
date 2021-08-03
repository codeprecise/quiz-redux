import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  getAnswerStates,
  currentQuestion as currentQuestionHelper,
} from './app.helpers';
import { appFeatureKey, AppState, INITIAL_APP_STATE } from './app.state';

export const root = createFeatureSelector<AppState>(appFeatureKey);

export const allQuestions = createSelector(root, (state) => state.questions);

export const currentQuestion = createSelector(root, (state) =>
  currentQuestionHelper(state)
);

export const answerStates = createSelector(root, (state) => [
  ...getAnswerStates(state),
]);

export const answeredQuestions = createSelector(root, (state) =>
  state.answers
    .map((answer, index) => (
      {
        ...state.questions[index],
        ...answer
      }))
);

export const isQuizEnd = createSelector(
  root,
  (state) => state.answers.length == state.questions.length
);
