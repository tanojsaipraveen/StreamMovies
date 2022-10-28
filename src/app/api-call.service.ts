import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }

  getMovieData(name:String){
    let url = "https://songsapi.herokuapp.com/getmoviedata/"+name;
    return this.http.get(url);
  }
}
