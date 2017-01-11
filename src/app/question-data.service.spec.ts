/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionDataService } from './question-data.service';

describe('QuestionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionDataService]
    });
  });

  it('should ...', inject([QuestionDataService], (service: QuestionDataService) => {
    expect(service).toBeTruthy();
  }));
});
