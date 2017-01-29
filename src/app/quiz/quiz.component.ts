import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/merge';
import { animate, Component, transition, trigger, OnInit } from '@angular/core';
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
  id = 1;
  question: Question;
  questions: AppStore[];
  answer: string;
  questionsObservable: Observable<AppStore[]>;
  constructor(private router: Router, private route: ActivatedRoute, private quizData: QuestionDataService, private store: Store<AppState>) { 
  }

  next() {
      this.store.dispatch({type: "ADD", payload: {question: this.question.question, answer: this.answer, correct: this.answer === this.question.answer}});
      let newId = this.id + 1;
      if(newId === 11) {
        this.router.navigate(['finish']);
      } else {
        this.quizData.getQuestion(newId).subscribe((question) => {
          this.question = question;
          this.answer = undefined;
          this.id += 1;
        });
      }
  }

  ngOnInit() {
    this.quizData.getQuestion(this.id).subscribe(question => this.question = question);
  }
}
