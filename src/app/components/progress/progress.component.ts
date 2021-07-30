import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ANSWER_STATES } from 'src/app/models/data';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  answerStates$ = of(ANSWER_STATES);

  constructor() { }

  ngOnInit(): void {
  }

}
