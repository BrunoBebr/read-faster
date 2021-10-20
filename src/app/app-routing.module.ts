import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LevelOneComponent } from './classic_levels/level-one/level-one.component';

import { MainPageComponent } from './main-page/main-page.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "training", component: TrainingComponent},
  {path: "practice/classic/level/:id", component: LevelOneComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
