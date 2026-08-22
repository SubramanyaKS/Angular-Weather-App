import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [HeaderComponent, SearchBarComponent, CardComponent, FooterComponent, RouterOutlet]
})
export class AppComponent {
  weatherData: any;
  title = 'weather-app';
  constructor(private weatherService: ApiService) {}

  receiveWeatherData(data: any) {
    this.weatherData = data;
  }
}
