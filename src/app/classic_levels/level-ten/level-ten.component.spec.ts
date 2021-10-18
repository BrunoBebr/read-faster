import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTenComponent } from './level-ten.component';

describe('LevelTenComponent', () => {
  let component: LevelTenComponent;
  let fixture: ComponentFixture<LevelTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
