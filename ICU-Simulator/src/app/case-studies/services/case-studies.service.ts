import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../../constant';

@Injectable({
  providedIn: 'root',
})
export class CaseStudiesService {
  constructor(private http: HttpClient) {}
  scenarioURL = Constant.api + 'Scenario';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  getScenarios(): Observable<any> {
    return this.http.get(this.scenarioURL, this.httpOptions);
  }
}
