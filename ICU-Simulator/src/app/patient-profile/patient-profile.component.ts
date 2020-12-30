import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Quiz } from '../models';
declare var $: any;
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss'],
})
export class PatientProfileComponent implements OnInit, OnDestroy {
  constructor() {}
  expand: boolean;
  questions: Array<Quiz>;
  position = 0;

  ngOnInit(): void {
    document.body.style.backgroundColor = '#f4f5fa';
    this.expand = false;
    this.questions = [
      {
        question: 'This is question 1',
        options: ['Option 11', 'Option 12', 'Option 13', 'Option 14'],
      },
      {
        question: 'This is question 2',
        options: ['Option 21', 'Option 22', 'Option 23', 'Option 24'],
      },
      {
        question: 'This is question 3',
        options: ['Option 31', 'Option 32', 'Option 33', 'Option 34'],
      },
    ];
    setTimeout(() => $('.collapse').collapse(), 10);
  }

  expandCollapse() {
    this.expand = !this.expand;
    $('.collapse').toggle();
  }

  answerChoosen(option: string) {
    if (this.position < this.questions.length) {
      this.position += 1;
    }
  }

  ngOnDestroy(): void {
    document.body.style.backgroundColor = 'rgb(51, 51, 52)';
  }
}
