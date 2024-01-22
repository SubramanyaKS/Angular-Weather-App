import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() weatherData: any;
  currentTime: string="";
 
  // compassSector = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
  public receiveData:string="";
  constructor(public weather:ApiService) {
    this.receiveData=this.weather.data;
    // console.log(this.weather.data)
    
   }

  ngOnInit(): void {
  }
  updateCurrentDate(dt:number): string {
    // Convert the timestamp (dt) to a human-readable time format
    const timestamp = dt; // Convert seconds to milliseconds
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    return date.toLocaleDateString(); // Adjust this based on your desired time format
  }
  convertUnixTimestampToTime(timestamp: number): string {
    // Convert the timestamp to milliseconds
  const date = new Date(timestamp * 1000);
   return  date.toLocaleTimeString();
  }
  convertVisibilityKm(visibility: number):number {
    return Math.round(visibility/1000);
  }

}
