import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEntretienComponent } from './view-entretien.component';

describe('ViewEntretienComponent', () => {
  let component: ViewEntretienComponent;
  let fixture: ComponentFixture<ViewEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
