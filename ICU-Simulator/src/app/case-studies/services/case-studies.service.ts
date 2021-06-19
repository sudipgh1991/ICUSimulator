import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../../constant';
import { Condition, Scenario, Symptom } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class CaseStudiesService {
  constructor(private http: HttpClient) {}
  apiURL = Constant.api + 'CaseStudies';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
  };

  getScenarios = (): Observable<Array<Scenario>> =>
    this.http.get<Array<Scenario>>(
      this.apiURL + '/scenarios',
      this.httpOptions
    );

  getConditions = (): Observable<Array<Condition>> =>
    this.http.get<Array<Condition>>(
      this.apiURL + '/conditions',
      this.httpOptions
    );

  getSymptoms = (): Observable<Array<Symptom>> =>
    this.http.get<Array<Symptom>>(this.apiURL + '/symptoms', this.httpOptions);

  addScenario(scenario: Scenario): Observable<Scenario> {
    return this.http.post(
      this.apiURL + '/AddScenario',
      scenario,
      this.httpOptions
    );
  }
}
