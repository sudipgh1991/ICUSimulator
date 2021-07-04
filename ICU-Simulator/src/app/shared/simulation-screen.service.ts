import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../constant';
import { SimulationScreen } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SimulationScreenService {
  constructor(private http: HttpClient) {}
  apiURL = Constant.api + 'SimulationScreen';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  getParameters = (): Observable<SimulationScreen[]> =>
    this.http.get<SimulationScreen[]>(this.apiURL, this.httpOptions);

  saveParameters = (simulationScreen: SimulationScreen) =>
    this.http.put(this.apiURL, simulationScreen);

  keepAlive = () => this.http.get(this.apiURL + '/keepAlive', this.httpOptions);
}
