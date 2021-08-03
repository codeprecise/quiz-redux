import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppSelectors } from 'src/app/redux/app.types';
import { AnsweredQuestion } from 'src/app/models/answeredquestion.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

  answeredQuestions$!: Observable<AnsweredQuestion[]>

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.answeredQuestions$ = this.store
      .select(AppSelectors.answeredQuestions);
  }
}
