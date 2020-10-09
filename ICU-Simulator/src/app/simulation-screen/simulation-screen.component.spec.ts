import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationScreenComponent } from './simulation-screen.component';

describe('SimulationScreenComponent', () => {
  let component: SimulationScreenComponent;
  let fixture: ComponentFixture<SimulationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
