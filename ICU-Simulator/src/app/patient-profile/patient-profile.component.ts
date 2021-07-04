import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientProfile, Quiz } from '../models';
import jquery from 'jquery';
import { Router } from '@angular/router';
import { PatientProfileService } from './patient-profile.service';
import { AlertifyService } from '../shared/alertify.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss'],
})
export class PatientProfileComponent implements OnInit, OnDestroy {
  constructor(
    private modalService: NgbModal,
    private route: Router,
    private patientService: PatientProfileService,
    private alertifyService: AlertifyService
  ) {}

  expand: boolean;
  questions: Array<Quiz>;
  question: Quiz = {
    question: null,
    option1: null,
    option2: null,
    option3: null,
    option4: null,
    correctAnswer: null,
    justification: null,
  };
  answerChoosed: string;
  showWrongRightColor: boolean;
  position = 0;
  patientProfile: PatientProfile = {
    caseStudyId: parseInt(
      this.route.url.split('/')[this.route.url.split('/').length - 1]
    ),
    name: null,
    age: null,
    email: null,
    contact: null,
    address: null,
    bloodType: null,
    allergies: null,
    disease: null,
    condition: null,
    lastVisit: '1900-01-01',
    symptoms: null,
  };
  patientProfileView: PatientProfile;
  showToast = false;
  isUser = false;

  ngOnInit(): void {
    this.expand = false;
    this.questions = [];
    this.isUser = sessionStorage.getItem('isUser') === 'true';
    setTimeout(() => {
      jquery('body').css('background-color', 'white');
    }, 10);
    this.getProfile();
    this.getQuiz();
  }

  getQuiz = () =>
    this.patientService.getAllQuiz().subscribe((data) => {
      this.questions = data;
    });

  getProfile() {
    const caseStudyId = parseInt(
      this.route.url.split('/')[this.route.url.split('/').length - 1]
    );
    this.patientService.getProfile(caseStudyId).subscribe((data) => {
      if (data) {
        this.patientProfileView = data;
        this.patientProfile = data;
      }
    });
  }

  expandCollapse() {
    this.expand = !this.expand;
    jquery('.collapse').toggle();
  }

  answerChoosen(option: string) {
    if (this.position < this.questions.length) {
      this.showWrongRightColor = true;
      this.answerChoosed = option;
    }
    if (this.position === this.questions.length - 1) {
      this.alertifyService.success(
        'Test Completed Successfully!!! Click back to Case Studies to go back to Case Studies screen'
      );
    }
  }

  incrementPosition() {
    this.position += 1;
    jquery('.collapse').toggle();
    this.answerChoosed = null;
    this.showWrongRightColor = false;
  }

  ngOnDestroy(): void {
    document.body.style.backgroundColor = 'rgb(51, 51, 52)';
  }

  open(content) {
    setTimeout(() => jquery('ngb-modal-backdrop').remove(), 1);
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'dark-modal',
        size: 'xl',
        centered: true,
      })
      .result.then(
        (result) => {
          switch (result) {
            case 'Save': {
              this.patientService
                .saveProfile(this.patientProfile)
                .subscribe((data) => {
                  this.patientProfileView = data;
                  this.patientProfile = data;
                  this.alertifyService.success(
                    'Patient Profile added successfully'
                  );
                  this.getProfile();
                });
              break;
            }
            case 'Edit': {
              this.patientService
                .editProfile(this.patientProfile)
                .subscribe((data) => {
                  this.patientProfileView = data;
                  this.patientProfile = data;
                  this.alertifyService.success(
                    'Patient Profile edited successfully'
                  );
                  this.getProfile();
                });
              break;
            }
            case 'Add Question': {
              this.patientService.saveQuiz(this.question).subscribe((data) => {
                this.questions.push(data);
              });
              this.ngOnInit();
            }
          }
        },
        (reason) => {}
      );
  }

  getAllergies = () => this.patientProfileView.allergies.split(';').join(',');

  getDiseases = () => this.patientProfileView.disease.split(';').join(',');

  getSymptoms = () => this.patientProfileView.symptoms.split(';');
}
