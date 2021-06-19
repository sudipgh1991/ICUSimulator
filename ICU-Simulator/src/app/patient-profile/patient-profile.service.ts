import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../constant';
import { PatientProfile, Quiz } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PatientProfileService {
  constructor(private http: HttpClient) {}
  apiPatientURL = Constant.api + 'PatientProfile';
  apiQuizURL = Constant.api + 'Quiz';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
  };

  getProfile = (caseStudyId: number): Observable<PatientProfile> =>
    this.http.get<PatientProfile>(
      this.apiPatientURL + '/' + caseStudyId,
      this.httpOptions
    );

  saveProfile = (patientProfile: PatientProfile): Observable<PatientProfile> =>
    this.http.post<PatientProfile>(
      this.apiPatientURL,
      patientProfile,
      this.httpOptions
    );

  editProfile = (patientProfile: PatientProfile): Observable<PatientProfile> =>
    this.http.put<PatientProfile>(
      this.apiPatientURL,
      patientProfile,
      this.httpOptions
    );

  saveQuiz = (quiz: Quiz) =>
    this.http.post<Quiz>(this.apiQuizURL, quiz, this.httpOptions);

  getQuizById = (Id: number): Observable<Quiz> =>
    this.http.get<Quiz>(this.apiQuizURL + '/' + Id, this.httpOptions);

  getAllQuiz = (): Observable<Array<Quiz>> =>
    this.http.get<Array<Quiz>>(this.apiQuizURL, this.httpOptions);
}
