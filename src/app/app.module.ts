import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionDataService } from './question-data.service';
import { StateService } from './state.service';
import { FinishComponent } from './finish/finish.component';
import { questionReducer } from './questions';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    QuizComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    StoreModule.provideStore({ questions: questionReducer })
  ],
  providers: [QuestionDataService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
