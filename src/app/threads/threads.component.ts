import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  ngOnInit(): void {
  }

  title = 'ASW';
  items = [];

  id = "";
  url ="https://enigmatic-crag-72042.herokuapp.com/api/messages/comment_user/Mike";
  url_delete = "https://enigmatic-crag-72042.herokuapp.com/api/messages/comments/delete/";

  constructor(private http:HttpClient){
    const headers = { 'X-API-KEY':'f1a4e17fc4e24c01e53bea107ce36e750b4a23ef' }
    this.url = this.url + this.id;
    this.http.get<any>(this.url, { headers }).subscribe(data => {
      for (let key in data) {
        this.items.push(data[key]);
      }
    });
  }



  delete(id){
    const headers = {'X-API-KEY': 'f1a4e17fc4e24c01e53bea107ce36e750b4a23ef'}
    const body = {id: id}
    this.http.delete<any>(this.url_delete + id.toString(), {headers}).subscribe(data => {
      console.warn(data)
      window.location.reload()
    })

  }

}
