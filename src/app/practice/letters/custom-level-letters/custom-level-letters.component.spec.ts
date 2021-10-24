import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLevelLettersComponent } from './custom-level-letters.component';

describe('CustomLevelLettersComponent', () => {
  let component: CustomLevelLettersComponent;
  let fixture: ComponentFixture<CustomLevelLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLevelLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLevelLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
