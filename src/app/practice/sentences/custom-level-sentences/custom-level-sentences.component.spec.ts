import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLevelSentencesComponent } from './custom-level-sentences.component';

describe('CustomLevelSentencesComponent', () => {
  let component: CustomLevelSentencesComponent;
  let fixture: ComponentFixture<CustomLevelSentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLevelSentencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLevelSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
