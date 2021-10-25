import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicLevelSentencesComponent } from './classic-level-sentences.component';

describe('ClassicLevelSentencesComponent', () => {
  let component: ClassicLevelSentencesComponent;
  let fixture: ComponentFixture<ClassicLevelSentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicLevelSentencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicLevelSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
