import { Component, OnInit } from '@angular/core';
import { CaseStudiesService } from './services/case-studies.service';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss'],
})
export class CaseStudiesComponent implements OnInit {
  constructor(private caseStudy: CaseStudiesService) {}
  caseStudies: Array<any> = [];
  ngOnInit(): void {
    this.caseStudy.getScenarios().subscribe((data) => {
      this.caseStudies = data;
    });
  }
}
