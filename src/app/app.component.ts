import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {



  title = 'ASW';
  items = [];

  url = "https://enigmatic-crag-72042.herokuapp.com/api/messages/all/give"

  constructor(private http:HttpClient){
    const headers = { 'X-API-KEY':'78d593631bb429d28f7a81cdb530b0e37b8a00c8' }
    this.http.get<any>(this.url, { headers }).subscribe(data => {
      for (let key in data) {
        this.items.push(data[key]);
      }
    });
  }
}
