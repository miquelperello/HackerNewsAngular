import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  ngOnInit(): void {
  }

  url = "https://enigmatic-crag-72042.herokuapp.com/api/messages/comments/replies/create";
  text:String;
  id = "";

  constructor(private _activatedRoute: ActivatedRoute, private http: HttpClient) {
    _activatedRoute.queryParams.subscribe(
      params =>   this.id = params['id']);
      console.log('scope is ' + this.id);
      
  }

  reply(){
    const headers = {'X-API-KEY': 'f1a4e17fc4e24c01e53bea107ce36e750b4a23ef'}
    const body = {comment_id: this.id, text: this.text}
    this.http.post<any>(this.url, body,{headers}).subscribe(data => {
      console.warn(data);
    })

  }

}
