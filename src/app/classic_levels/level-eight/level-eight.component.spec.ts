import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelEightComponent } from './level-eight.component';

describe('LevelEightComponent', () => {
  let component: LevelEightComponent;
  let fixture: ComponentFixture<LevelEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
