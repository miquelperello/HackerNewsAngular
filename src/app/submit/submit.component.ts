import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  ngOnInit(): void {
  }

  url = "https://enigmatic-crag-72042.herokuapp.com/api/messages/create";
  tittle:String = "";
  URL:String = "";
  text:String = "";

  constructor(private http: HttpClient) {}

  addInfo(){
    const headers = {'X-API-KEY': 'f1a4e17fc4e24c01e53bea107ce36e750b4a23ef'}
    const body = {title: this.tittle, url: this.URL, text: this.text}
    this.http.post<any>(this.url, body,{headers}).subscribe(data => {
      console.warn(data)
    })

  }




}
