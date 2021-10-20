import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionModesComponent } from './selection-modes.component';

describe('SelectionModesComponent', () => {
  let component: SelectionModesComponent;
  let fixture: ComponentFixture<SelectionModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionModesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
