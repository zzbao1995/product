import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../../service/user.service';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  loadingOK: boolean;
  UserInfoes: UserInfo[];
  apiUrl = 'http://localhost:63294/api/UserInfoes/';

  constructor(public http: HttpClient) {
    this.makeRequest();
   }

  // get请求，，返回所有的UserInfo实体对象
  makeRequest(): void {
    this.loadingOK = false;
    // <>指定返回数据类型
    this.http.get<UserInfo[]>(this.apiUrl)
      .subscribe((res) => {
        this.UserInfoes = res;
        this.loadingOK = true;
      });
  }
  ngOnInit() {
  }

}

