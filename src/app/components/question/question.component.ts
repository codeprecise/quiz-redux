import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { QUESTIONS } from 'src/app/models/data';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  question$ = of(QUESTIONS[0])

  ngOnInit(): void {
  }

}
