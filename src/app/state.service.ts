import { Injectable } from '@angular/core';

import { Question } from './models/question';
@Injectable()
class State {
  answered: Question[];
  correct: number;
  constructor() {
    this.answered = new Array<Question>();
    this.correct = 0;
  }
}
export class StateService {

  state: State;
  constructor() {
    this.state = new State();
   }
  store(question: Question, answer: string) :void {
    this.state.answered.push(question);
    if(question.answer == answer) {
      this.state.correct++;
    } else {
      console.log(question);
      console.log(answer);
      console.log("You said", answer);
      console.log("The correct answer was", question.answer);

    }
  }
  getNext() : number {
    let length: number = this.state.answered.length = this.state.answered.length;
    return  length == 10 ? 0 : length;
  }
}
