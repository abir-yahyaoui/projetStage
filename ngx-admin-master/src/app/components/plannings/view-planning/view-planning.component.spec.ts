import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlanningComponent } from './view-planning.component';

describe('ViewPlanningComponent', () => {
  let component: ViewPlanningComponent;
  let fixture: ComponentFixture<ViewPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
