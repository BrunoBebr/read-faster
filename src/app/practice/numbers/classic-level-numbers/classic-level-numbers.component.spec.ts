import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicLevelNumbersComponent } from './classic-level-numbers.component';

describe('ClassicLevelNumbersComponent', () => {
  let component: ClassicLevelNumbersComponent;
  let fixture: ComponentFixture<ClassicLevelNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicLevelNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicLevelNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
