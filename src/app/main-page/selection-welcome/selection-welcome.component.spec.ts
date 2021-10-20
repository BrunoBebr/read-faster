import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionWelcomeComponent } from './selection-welcome.component';

describe('SelectionWelcomeComponent', () => {
  let component: SelectionWelcomeComponent;
  let fixture: ComponentFixture<SelectionWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
