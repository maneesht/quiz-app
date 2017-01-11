import 'rxjs/add/operator/distinctUntilChanged';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../quiz/quiz.component';
import { StateService } from '../state.service';
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  correct: number;
  constructor(private store: Store<AppState>, private stateService: StateService) { }

  ngOnInit() {
    this.store.select(state => state.questions.filter(question => question.correct))
      .subscribe((info) => {this.correct = info.length});
  }
}
