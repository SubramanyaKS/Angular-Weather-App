import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.weather';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public data:string="";
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;
  private iconUrl = environment.iconUrl;

  constructor(private http:HttpClient) { }

  fetchData(city:string):Observable<any>{
    return this.http.get(`${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`)
  }
  getWeatherIconUrl(iconCode: string): string {
    // console.log(iconCode);
    return `${this.iconUrl}/${iconCode}.png`;
  }
}
