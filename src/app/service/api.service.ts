import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService
{
  private urlApi = 'https://recruiting-api.newshore.es/api/flights/1';
  constructor( private http: HttpClient)  { }

  public getData() : Observable <any>
  {
    return this.http.get<any>(this.urlApi) ;
  }

  getFlightRoute(origin: string, destination: string): Observable<any> {
    const url = `${this.urlApi}/${origin}/${destination}`;
    return this.http.get<any>(url);
  }
}
