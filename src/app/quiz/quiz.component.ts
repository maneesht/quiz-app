import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { QuestionDataService } from '../question-data.service';
import { StateService } from '../state.service';
import { Question } from '../models/question';

export interface AppState {
  questions: AppStore[]
}
export interface AppStore {
  question: string;
  answer: string;
  correct: boolean;
}
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  id: number;
  question: Question;
  questions: AppStore[];
  answer: string;
  constructor(private router: Router, private route: ActivatedRoute, private quizData: QuestionDataService, private store: Store<AppState>) { 
    this.store.select(store => store.questions)
          .subscribe((questions: AppStore[]) => {
              this.questions = questions;
          });
  }

  next() {
      this.store.dispatch({type: "ADD", payload: {question: this.question.question, answer: this.answer, correct: this.answer == this.question.answer}});
      let len: number = this.questions.length;
      let arr = ['quiz', this.id + 1];
      len < 10 ? this.router.navigate(arr) : this.router.navigate(['finish']);
      this.answer = undefined;
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {this.id = +params['id']; if(this.id - 1 > this.questions.length) this.router.navigate(['quiz', 1]); return this.quizData.getQuestion(+params['id'])})
      .subscribe((question: Question) => {this.question = question});
  }
}
