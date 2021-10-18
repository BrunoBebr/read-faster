import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelEightComponent } from './classic_levels/level-eight/level-eight.component';
import { LevelFiveComponent } from './classic_levels/level-five/level-five.component';
import { LevelFourComponent } from './classic_levels/level-four/level-four.component';
import { LevelNineComponent } from './classic_levels/level-nine/level-nine.component';
import { LevelOneComponent } from './classic_levels/level-one/level-one.component';
import { LevelSevenComponent } from './classic_levels/level-seven/level-seven.component';
import { LevelSixComponent } from './classic_levels/level-six/level-six.component';
import { LevelTenComponent } from './classic_levels/level-ten/level-ten.component';
import { LevelThreeComponent } from './classic_levels/level-three/level-three.component';
import { LevelTwoComponent } from './classic_levels/level-two/level-two.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "training", component: TrainingComponent},
  {path: "practice/classic/level-1", component: LevelOneComponent},
  {path: "practice/classic/level-2", component: LevelTwoComponent},
  {path: "practice/classic/level-3", component: LevelThreeComponent},
  {path: "practice/classic/level-4", component: LevelFourComponent},
  {path: "practice/classic/level-5", component: LevelFiveComponent},
  {path: "practice/classic/level-6", component: LevelSixComponent},
  {path: "practice/classic/level-7", component: LevelSevenComponent},
  {path: "practice/classic/level-8", component: LevelEightComponent},
  {path: "practice/classic/level-9", component: LevelNineComponent},
  {path: "practice/classic/level-10", component: LevelTenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
