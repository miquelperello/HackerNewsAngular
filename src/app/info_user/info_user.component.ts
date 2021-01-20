import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-news',
  templateUrl: './info_user.component.html',
  styleUrls: ['./info_user.component.css']
})
export class Info_userComponent implements OnInit {


  idUserIdk: string = "";

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      console.log(params["id"]);
      this.idUserIdk = (params["id"]);
    });
  }



  title = 'ASW';
  name = "";
  created = "";
  about = "";
  id = "";
  idUser = "";

  url = "https://enigmatic-crag-72042.herokuapp.com/api/user/"

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private http:HttpClient) {
    _activatedRoute.queryParams.subscribe(
      params =>   this.idUser = params['id']);
    this.ngOnInit();
    const headers = { 'X-API-KEY':'78d593631bb429d28f7a81cdb530b0e37b8a00c8' }
    this.url = this.url +"/" + this.idUserIdk;
    console.log(this.url);
    console.log(this.idUserIdk);
    this.http.get<any>(this.url, { headers }).subscribe(data => {

      this.name = data["name"]
      this.created = data["created_at"]
      this.about = data["about"]
      this.id = data["id"]
    });
  }
}
