import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { SportComponent } from './sport/sport.component';
import { TeamComponent } from './team/team.component';
import { ResultsComponent } from './results/results.component';
import { MainComponent } from './main/main.component';
import { AnswersService } from './answers.service';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'food', component: FoodComponent },
  { path: 'sport', component: SportComponent },
  { path: 'team', component: TeamComponent },
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [AnswersService],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
