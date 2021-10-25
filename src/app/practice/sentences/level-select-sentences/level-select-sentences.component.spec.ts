import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSelectSentencesComponent } from './level-select-sentences.component';

describe('LevelSelectSentencesComponent', () => {
  let component: LevelSelectSentencesComponent;
  let fixture: ComponentFixture<LevelSelectSentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelSelectSentencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSelectSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
