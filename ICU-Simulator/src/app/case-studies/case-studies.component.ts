import { Component, OnInit } from '@angular/core';
import { CaseStudiesService } from './services/case-studies.service';
import { CaseStudy } from '../models';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss'],
})
export class CaseStudiesComponent implements OnInit {
  constructor(private caseStudy: CaseStudiesService) {}
  caseStudies: Array<CaseStudy> = [];
  ngOnInit(): void {
    this.caseStudy.getScenarios().subscribe(
      (data: Array<CaseStudy>) => {
        this.caseStudies = data;
      },
      (err) => {
        this.populateDefaultCaseStudies();
      }
    );
  }

  populateDefaultCaseStudies() {
    this.caseStudies = [
      {
        type: 'heart',
        briefDescription: 'Case Study 1111',
        detailedDescription:
          'A 65 year old gentleman, H/O HTN and DM presented with SOB. On examination, anxious, having respiratory distress and cold peripheries',
      },
      {
        type: 'brain',
        briefDescription: 'Case Study 2',
        detailedDescription:
          '55 year male, HTN, DM and ischaemic heart disease. Presented with chest discomfort, and SOB. Consci ous, warm peripheries, sp2: 89%',
      },
      {
        type: 'kidney',
        briefDescription: 'Case Study 3',
        detailedDescription:
          'A 60 year old gentleman,H/O HTN and DM presented with SOB. On examination, anxious, having respiratory distress and cold peripheries',
      },
      {
        type: 'brain',
        briefDescription: 'Case Study 4',
        detailedDescription:
          '50 year male, HTN, DM and ischaemic heart disease. Presented with chest discomfort, and SOB. Consci ous, warm peripheries, sp2: 89%',
      },
      {
        type: 'kidney',
        briefDescription: 'Case Study 5',
        detailedDescription:
          'A 62 year old gentleman,H/O HTN and DM presented with SOB. On examination, anxious, having respiratory distress and cold peripheries',
      },
      {
        type: 'heart',
        briefDescription: 'Case Study 6',
        detailedDescription:
          '58 year male, HTN, DM and ischaemic heart disease. Presented with chest discomfort, and SOB. Consci ous, warm peripheries, sp2: 89%',
      },
    ];
  }
}
