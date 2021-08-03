import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndComponent } from './components/end/end.component';
import { QuestionComponent } from './components/question/question.component';

export const AppRoutes = { question: 'question', end: 'end' };

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRoutes.question },
  { path: AppRoutes.question, component: QuestionComponent },
  { path: AppRoutes.end, component: EndComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
