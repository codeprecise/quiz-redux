import * as AppActions from './app.actions';
import * as AppReducers from './app.reducers';
import * as AppSelectors from './app.selectors';

export { AppActions, AppReducers, AppSelectors };

export interface AnswerQuestionProps {
  answerIndex: number;
}
