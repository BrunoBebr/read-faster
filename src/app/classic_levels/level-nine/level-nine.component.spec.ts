import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelNineComponent } from './level-nine.component';

describe('LevelNineComponent', () => {
  let component: LevelNineComponent;
  let fixture: ComponentFixture<LevelNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
