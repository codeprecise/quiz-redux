import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Answer, AnswerState } from 'src/app/models/answer.model';
import { ANSWER_STATES } from 'src/app/models/data';
import { AppSelectors } from 'src/app/redux/app.types';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  answerStates$!: Observable<AnswerState[]>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.answerStates$ = this.store.select(
      AppSelectors.answerStates
    )
  }

}
