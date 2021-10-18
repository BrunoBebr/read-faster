import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNextLevelComponent } from './dialog-next-level.component';

describe('DialogNextLevelComponent', () => {
  let component: DialogNextLevelComponent;
  let fixture: ComponentFixture<DialogNextLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNextLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNextLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
