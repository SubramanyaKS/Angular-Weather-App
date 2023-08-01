import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() weatherData: any;
  details:any;
  temperature:number=0;
  tempMin:number=0;
  tempMax:number=0;
  humidity:number=0;
  pressure:number=0;
  name:string="";
  description:string="";
  country:string="";
  sunrise: string= "";
  sunset: string= "";
  windSpeed:number=0.0;
  windDegree:number=0.0;
  // compassSector = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
  public receiveData:string="";
  constructor(private weather:ApiService) {
    this.receiveData=this.weather.data;
    this.details=this.weatherData;
   }

  ngOnInit(): void {
        this.details=this.weatherData;
        // console.log("Temp",this.details.main.temp);
        this.name=this.details.name;
        this.temperature=this.details.main.temp;
        this.tempMin=this.details.main.temp_min;
        this.tempMax=this.details.main.temp_max;
        this.humidity=this.details.main.humidity;
        this.pressure = this.details.main.pressure;
        this.description = this.details.weather[0].description;
        this.country=this.details.sys.country;
        this.sunrise= new Date((this.weatherData.sys.sunrise + this.weatherData.timezone) * 1000).toISOString().slice(11,19)
        this.sunset= new Date((this.details.sys.sunset + this.details.timezone) * 1000).toISOString().slice(11,19)
        this.windSpeed=this.details.wind.speed;
        this.windDegree=this.details.wind.deg;
  }

}
