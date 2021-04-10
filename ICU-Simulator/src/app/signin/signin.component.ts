import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(private router: Router) { }
  username: string;
  password: string;

  ngOnInit(): void {}

  login(): void {
    if (this.username === 'admin' && this.password === 'admin'){
      this.router.navigate(['simulationScreenAdmin']);
    } else if (this.username === 'user' && this.password === 'user'){
      this.router.navigate(['simulationScreenUser']);
    } else {
      alert('Invalid credentials');
    }
  }
}
