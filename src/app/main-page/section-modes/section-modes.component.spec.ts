import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionModesComponent } from './section-modes.component';

describe('SectionModesComponent', () => {
  let component: SectionModesComponent;
  let fixture: ComponentFixture<SectionModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionModesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
