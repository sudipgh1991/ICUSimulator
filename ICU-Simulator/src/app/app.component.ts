import { Component, OnInit } from '@angular/core';
import jquery from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      jquery('body').css('background-color', 'rgb(51, 51, 52)');
    }, 10);
  }
}
