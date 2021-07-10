import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CaseStudiesService } from './services/case-studies.service';
import { Condition, Scenario, Symptom } from '../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import jquery from 'jquery';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss'],
})
export class CaseStudiesComponent implements OnInit {
  constructor(
    private caseStudyService: CaseStudiesService,
    private modalService: NgbModal
  ) {}
  scenarios: Array<Scenario> = [];
  conditions: Array<Condition> = [];
  conditionSelected: string = null;
  symptoms: Array<Symptom> = [];
  scenarioSelected: Scenario = {
    id: null,
    age: null,
    conditionId: null,
    symptomId: null,
    measureId: '0',
    briefDescription: '',
    detailedDescription: '',
    type: null,
  };
  showToast = false;
  isUser = false;
  showSpinner = true;

  ngOnInit(): void {
    this.isUser = sessionStorage.getItem('isUser') === 'true';
    this.getScenarios();
    this.getConditions();
    this.getSymptoms();
  }

  getScenarios() {
    this.caseStudyService.getScenarios().subscribe(
      (data: Array<Scenario>) => {
        this.showSpinner = false;
        this.scenarios = data;
      },
      (err) => {
        alert('Failed to connect to server');
      }
    );
  }

  getConditions() {
    this.caseStudyService.getSymptoms().subscribe(
      (data) => {
        this.symptoms = data;
      },
      (err) => alert('Failed to connect to server')
    );
  }

  getSymptoms() {
    this.caseStudyService.getConditions().subscribe(
      (data) => {
        this.conditions = data;
      },
      (err) => alert('Failed to connect to server')
    );
  }

  open(content) {
    setTimeout(() => jquery('ngb-modal-backdrop').remove(), 1);
    this.showToast = false;
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'dark-modal',
        size: 'xl',
        centered: true,
      })
      .result.then(
        (result) => {
          this.caseStudyService
            .addScenario(this.scenarioSelected)
            .subscribe((data) => {
              this.getScenarios();
              this.showToast = true;
            });
        },
        (reason) => {}
      );
  }
}
