import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MainPageComponent } from './main-page/main-page-layout/main-page.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { DialogNextLevelComponent } from './dialog-next-level/dialog-next-level.component';
import { NgParticlesModule } from 'ng-particles';
import { SectionWelcomeComponent } from './main-page/section-welcome/section-welcome.component';
import { SectionModesComponent } from './main-page/section-modes/section-modes.component';
import { ClassicLevelNumbersComponent } from './practice/numbers/classic-level-numbers/classic-level-numbers.component';
import { LevelSelectNumberComponent } from './practice/numbers/level-select-number/level-select-number.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomLevelNumbersComponent } from './practice/numbers/custom-level-numbers/custom-level-numbers.component';
import { LevelSelectLetterComponent } from './practice/letters/level-select-letter/level-select-letter.component';
import { ClassicLevelLettersComponent } from './practice/letters/classic-level-letters/classic-level-letters.component';
import { CustomLevelLettersComponent } from './practice/letters/custom-level-letters/custom-level-letters.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainPageComponent,
    DialogNextLevelComponent,
    SectionWelcomeComponent,
    SectionModesComponent,
    ClassicLevelNumbersComponent,
    LevelSelectNumberComponent,
    CustomLevelNumbersComponent,
    CustomLevelLettersComponent,
    LevelSelectLetterComponent,
    ClassicLevelLettersComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDialogModule,
    NgParticlesModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
