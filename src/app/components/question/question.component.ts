import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { QUESTIONS } from 'src/app/models/data';
import { Question } from 'src/app/models/question.model';
import { AppActions, AppSelectors } from 'src/app/redux/app.types';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) { }

  question$!: Observable<Question>;

  ngOnInit(): void {
    this.question$ = this.store.select(
      AppSelectors.currentQuestion);
  }

  onAnswer(answerIndex: number) {
    this.store.dispatch(
      AppActions.answerQuestion({ answerIndex }));
  }

}
