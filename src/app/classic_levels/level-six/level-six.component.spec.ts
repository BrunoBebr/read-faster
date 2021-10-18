import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSixComponent } from './level-six.component';

describe('LevelSixComponent', () => {
  let component: LevelSixComponent;
  let fixture: ComponentFixture<LevelSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
