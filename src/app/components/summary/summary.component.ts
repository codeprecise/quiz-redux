import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { QUESTIONS } from 'src/app/models/data';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  answeredQuestions$ = of(
    QUESTIONS.map((q) => ({ ...q, userAnswerIndex: 1 }))
  );

  ngOnInit(): void {}
}
