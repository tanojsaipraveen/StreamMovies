import { Component } from '@angular/core';
import {ApiCallService} from './api-call.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputModel="";
  moviedata:any=[];
  title = 'StreamMovies';
  constructor(private api:ApiCallService){
   
  }

  getData(val:any){
    this.api.getMovieData(val).subscribe(data=>{console.log(data)
      this.moviedata = data; 
      })
  }
}
