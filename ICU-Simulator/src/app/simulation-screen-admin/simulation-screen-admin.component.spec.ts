import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationScreenComponentAdmin } from './simulation-screen-admin.component';

describe('SimulationScreenComponentAdmin', () => {
  let component: SimulationScreenComponentAdmin;
  let fixture: ComponentFixture<SimulationScreenComponentAdmin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationScreenComponentAdmin],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationScreenComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
