import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ProgressComponent } from './components/progress/progress.component';
import { QuestionComponent } from './components/question/question.component';
import { EndComponent } from './components/end/end.component';
import { SummaryComponent } from './components/summary/summary.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appFeatureKey } from './redux/app.state';
import { appReducer } from './redux/app.reducers';
import { RoutingService } from './services/routing.service';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    QuestionComponent,
    EndComponent,
    SummaryComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({
      [appFeatureKey]: appReducer,
    }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 50,
    }),
  ],
  providers: [
    RoutingService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [RoutingService],
      useFactory: (routing: RoutingService) => () => routing.start(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
