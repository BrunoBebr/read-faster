import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSevenComponent } from './level-seven.component';

describe('LevelSevenComponent', () => {
  let component: LevelSevenComponent;
  let fixture: ComponentFixture<LevelSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
