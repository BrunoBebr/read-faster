import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSelectNumberComponent } from './level-select-number.component';

describe('LevelSelectNumberComponent', () => {
  let component: LevelSelectNumberComponent;
  let fixture: ComponentFixture<LevelSelectNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelSelectNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSelectNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
