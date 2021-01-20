import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-upvoted',
  templateUrl: './upvoted.component.html',
  styleUrls: ['./upvoted.component.css']
})
export class UpvotedComponent implements OnInit {

  items = [];
  id = "";
  url ="https://enigmatic-crag-72042.herokuapp.com/api/messages/upvoted/";

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private http:HttpClient) {
    _activatedRoute.queryParams.subscribe(
      params =>   this.id = params['id']);


    const headers = { 'X-API-KEY':'78d593631bb429d28f7a81cdb530b0e37b8a00c8' }
    this.url = this.url + this.id;
    this.http.get<any>(this.url, { headers }).subscribe(data => {
      for (let key in data) {
        this.items.push(data[key]);
      }
    });
  }

  ngOnInit(): void {
  }

}
