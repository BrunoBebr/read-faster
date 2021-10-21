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
import { TrainingComponent } from './training/training.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { LevelOneComponent } from './classic_levels/level-one/level-one.component';
import { DialogNextLevelComponent } from './dialog-next-level/dialog-next-level.component';
import { NgParticlesModule } from 'ng-particles';
import { SelectionWelcomeComponent } from './main-page/selection-welcome/selection-welcome.component';
import { SelectionModesComponent } from './main-page/selection-modes/selection-modes.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainPageComponent,
    TrainingComponent,
    LevelOneComponent,
    DialogNextLevelComponent,
    SelectionWelcomeComponent,
    SelectionModesComponent,
    
   
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
