import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SimulationScreenService } from '../shared/simulation-screen.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private router: Router,
    private simulationService: SimulationScreenService
  ) {}
  username: string;
  password: string;
  unauthorized = false;

  ngOnInit(): void {
    setInterval(() => this.simulationService.keepAlive(), 100);
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.unauthorized = false;
      this.router.navigate(['simulationScreenAdmin']);
      sessionStorage.setItem('isUser', 'false');
    } else {
      this.unauthorized = true;
    }
  }

  loginAsUser(): void {
    this.router.navigate(['simulationScreenUser']);
    sessionStorage.setItem('isUser', 'true');
  }
}
