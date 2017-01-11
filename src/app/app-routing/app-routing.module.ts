import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { QuizComponent } from '../quiz/quiz.component';
import { FinishComponent } from '../finish/finish.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'quiz/:id', component: QuizComponent },
      {path: 'finish', component: FinishComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
