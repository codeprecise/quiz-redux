import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ProgressComponent } from './components/progress/progress.component';
import { QuestionComponent } from './components/question/question.component';
import { EndComponent } from './components/end/end.component';
import { SummaryComponent } from './components/summary/summary.component'
@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    QuestionComponent,
    EndComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
