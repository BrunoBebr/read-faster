import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicLevelLettersComponent } from './classic-level-letters.component';

describe('ClassicLevelLettersComponent', () => {
  let component: ClassicLevelLettersComponent;
  let fixture: ComponentFixture<ClassicLevelLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicLevelLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicLevelLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
