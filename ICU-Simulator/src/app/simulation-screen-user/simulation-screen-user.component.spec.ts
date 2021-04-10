import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimulationScreenComponentUser } from './simulation-screen-user.component';

describe('SimulationScreenComponentUser', () => {
  let component: SimulationScreenComponentUser;
  let fixture: ComponentFixture<SimulationScreenComponentUser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationScreenComponentUser],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationScreenComponentUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
