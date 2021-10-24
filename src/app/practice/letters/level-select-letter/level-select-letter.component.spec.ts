import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSelectLetterComponent } from './level-select-letter.component';

describe('LevelSelectLetterComponent', () => {
  let component: LevelSelectLetterComponent;
  let fixture: ComponentFixture<LevelSelectLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelSelectLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSelectLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
