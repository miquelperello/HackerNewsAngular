import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ngOnInit(): void {
  }

  items = [];
  id = "";
  num = 1;
  url ="https://enigmatic-crag-72042.herokuapp.com/api/messages/all/give";
  url_like = "https://enigmatic-crag-72042.herokuapp.com//api/messages/like"
  url_unlike = "https://enigmatic-crag-72042.herokuapp.com//api/messages/unlike"

  constructor(private http:HttpClient){
    const headers = { 'X-API-KEY':'78d593631bb429d28f7a81cdb530b0e37b8a00c8' }
    this.url = this.url + this.id;
    this.http.get<any>(this.url, { headers }).subscribe(data => {
      for (let key in data) {

        this.items.push(data[key]);
      console.log(data[key]);

      }
    });
  }


  put_like(id){
    const headers = {'X-API-KEY': '78d593631bb429d28f7a81cdb530b0e37b8a00c8'}
    const body = {id: id}
    this.http.put<any>(this.url_like, body,{headers}).subscribe(data => {
      console.warn(data)
      window.location.reload()
    })

  }
  put_unlike(id){
    const headers = {'X-API-KEY': '78d593631bb429d28f7a81cdb530b0e37b8a00c8'}
    const body = {id: id}
    this.http.put<any>(this.url_unlike, body,{headers}).subscribe(data => {
      console.warn(data)
      window.location.reload()
    })

  }

}
