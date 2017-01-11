import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Question } from './models/question';
@Injectable()
export class QuestionDataService {
  constructor(private http: Http) { }
  
  getQuestion(id: number):Observable<Question> {
    return this.http.get(`data/${id}.json`) //Replace with actual call
      .map((r: Response) => { return r.json() as Question;});
  }
}
