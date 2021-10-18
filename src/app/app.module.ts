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
import { MainPageComponent } from './main-page/main-page.component';
import { TrainingComponent } from './training/training.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { LevelTwoComponent } from './classic_levels/level-two/level-two.component';
import { LevelOneComponent } from './classic_levels/level-one/level-one.component';
import { DialogNextLevelComponent } from './dialog-next-level/dialog-next-level.component';
import { NgParticlesModule } from 'ng-particles';
import { LevelThreeComponent } from './classic_levels/level-three/level-three.component';
import { LevelFourComponent } from './classic_levels/level-four/level-four.component';
import { LevelFiveComponent } from './classic_levels/level-five/level-five.component';
import { LevelSixComponent } from './classic_levels/level-six/level-six.component';
import { LevelSevenComponent } from './classic_levels/level-seven/level-seven.component';
import { LevelEightComponent } from './classic_levels/level-eight/level-eight.component';
import { LevelNineComponent } from './classic_levels/level-nine/level-nine.component';
import { LevelTenComponent } from './classic_levels/level-ten/level-ten.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainPageComponent,
    TrainingComponent,
    LevelTwoComponent,
    LevelOneComponent,
    DialogNextLevelComponent,
    LevelThreeComponent,
    LevelFourComponent,
    LevelFiveComponent,
    LevelSixComponent,
    LevelSevenComponent,
    LevelEightComponent,
    LevelNineComponent,
    LevelTenComponent
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
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
