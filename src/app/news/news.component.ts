import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  ngOnInit(): void {
  }



  title = 'ASW';
  items = [];

  url = "https://enigmatic-crag-72042.herokuapp.com/api/news"
  url_like = "https://enigmatic-crag-72042.herokuapp.com//api/messages/like"
  url_unlike = "https://enigmatic-crag-72042.herokuapp.com//api/messages/unlike"

  constructor(private http:HttpClient){
    const headers = { 'X-API-KEY':'78d593631bb429d28f7a81cdb530b0e37b8a00c8' }
    this.http.get<any>(this.url, { headers }).subscribe(data => {
      for (let key in data) {
        this.items.push(data[key]);
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
