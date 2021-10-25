import { NgModule } from '@angular/core';
import { Router, Event, NavigationEnd, Routes, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ClassicLevelNumbersComponent } from './practice/numbers/classic-level-numbers/classic-level-numbers.component';
import { LevelSelectNumberComponent } from './practice/numbers/level-select-number/level-select-number.component';
import { MainPageComponent } from './main-page/main-page-layout/main-page.component';
import { CustomLevelNumbersComponent } from './practice/numbers/custom-level-numbers/custom-level-numbers.component';
import { ClassicLevelLettersComponent } from './practice/letters/classic-level-letters/classic-level-letters.component';
import { LevelSelectLetterComponent } from './practice/letters/level-select-letter/level-select-letter.component';
import { CustomLevelLettersComponent } from './practice/letters/custom-level-letters/custom-level-letters.component';
import { LevelSelectSentencesComponent } from './practice/sentences/level-select-sentences/level-select-sentences.component';
import { ClassicLevelSentencesComponent } from './practice/sentences/classic-level-sentences/classic-level-sentences.component';
import { CustomLevelSentencesComponent } from './practice/sentences/custom-level-sentences/custom-level-sentences.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "practice/numbers/classic/level/:id", component: ClassicLevelNumbersComponent},
  {path: "practice/numbers/select-level", component: LevelSelectNumberComponent},
  {path: "practice/numbers/custom-level/:time/:min_num/:max_num", component: CustomLevelNumbersComponent},
  {path: "practice/letters/select-level", component: LevelSelectLetterComponent},
  {path: "practice/letters/classic/level/:id", component: ClassicLevelLettersComponent},
  {path: "practice/letters/custom-level/:time/:length/:Aa", component: CustomLevelLettersComponent},
  {path: "practice/sentences/select-level", component: LevelSelectSentencesComponent},
  {path: "practice/sentences/classic/level/:id", component: ClassicLevelSentencesComponent},
  {path: "practice/sentences/custom-level/:time/:length/:Aa", component: CustomLevelSentencesComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
