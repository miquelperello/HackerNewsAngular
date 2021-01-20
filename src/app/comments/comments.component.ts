import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  items = [];
  itemsMessage = [];
  id = "";
  url ="https://enigmatic-crag-72042.herokuapp.com/api/messages/comments/message/";
  urlMessage = "https://enigmatic-crag-72042.herokuapp.com/api/messages/";
  urlPost = "https://enigmatic-crag-72042.herokuapp.com/api/messages/comments/create";
  text: any;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private http:HttpClient) {
    _activatedRoute.queryParams.subscribe(
      params =>   this.id = params['id']);


    const headers = { 'X-API-KEY':'78d593631bb429d28f7a81cdb530b0e37b8a00c8' }
    this.url = this.url + this.id;
    this.urlMessage = this.urlMessage + this.id;

    this.http.get<any>(this.url, { headers }).subscribe(data => {
      for (let key in data) {
        this.items.push(data[key]);
        console.log(data[key]);
      }
    });
    this.http.get<any>(this.urlMessage, { headers }).subscribe(data => {
        this.itemsMessage.push(data);
        console.log(data);

    });
  }

  ngOnInit(): void {
  }

  AddAComment() {
      const headers = {'X-API-KEY': '37a9d74f4872bf07d92b6c6d38079da3a8b5fe4f'}
      const body = {mess_id: this.id, text_value: this.text}
      this.http.post<any>(this.urlPost, body,{headers}).subscribe(data => {
        console.warn(data)
      })

  }
}
