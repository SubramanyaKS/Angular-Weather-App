import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData: any;
  title = 'weather-app';
  constructor(private weatherService: ApiService) {}

  receiveWeatherData(data: any) {
    this.weatherData = data;
  }
}
