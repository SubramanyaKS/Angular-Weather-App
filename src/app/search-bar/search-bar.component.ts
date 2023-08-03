import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  location:string="";
  @Output() weatherDataEvent = new EventEmitter<any>();

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }
  search(){
    if(this.location){
      this.apiService.fetchData(this.location).subscribe({
        next :(res)=>{
          this.weatherDataEvent.emit(res);
        },
        error:(err)=>{
          console.error(err);
        },
        complete:()=>{
          console.log("All Test Completed")
        }
      }
      );
    }
  }

}
