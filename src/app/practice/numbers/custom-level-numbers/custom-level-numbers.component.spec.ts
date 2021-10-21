import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLevelNumbersComponent } from './custom-level-numbers.component';

describe('CustomLevelNumbersComponent', () => {
  let component: CustomLevelNumbersComponent;
  let fixture: ComponentFixture<CustomLevelNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLevelNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLevelNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
