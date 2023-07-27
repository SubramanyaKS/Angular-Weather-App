import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
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


  constructor(private weather:ApiService) { }

  ngOnInit(): void {
    this.weather.fetchData("london").subscribe({
      next: (res)=>{
        console.log(res)
        this.details=res;
        // console.log("Temp",this.details.main.temp);
        this.name=this.details.name;
        this.temperature=this.details.main.temp;
        this.tempMin=this.details.main.temp_min;
        this.tempMax=this.details.main.temp_max;
        this.humidity=this.details.main.humidity;
        this.pressure = this.details.main.pressure;
        this.description = this.details.weather[0].description;
        this.country=this.details.sys.country;
        this.sunrise= new Date((this.details.sys.sunrise + this.details.timezone) * 1000).toISOString().slice(0,25)
        this.sunset= new Date((this.details.sys.sunset + this.details.timezone) * 1000).toISOString().slice(0,25)
      },
      error:(err)=>{
        console.error(err);
      },
      complete:()=>{
        console.log("All Test Completed")
      }
    })
  }

}
