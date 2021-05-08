import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../../constant';

@Injectable({
  providedIn: 'root',
})
export class CaseStudiesService {
  constructor(private http: HttpClient) {}
  apiURL = Constant.api + 'CaseStudies';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  getScenarios = (): Observable<any> =>
    this.http.get(this.apiURL, this.httpOptions);
}
