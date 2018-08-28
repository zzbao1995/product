import { Injectable } from '@angular/core';

// 用户信息实体，实体属性与数据库表的字段相对应
@Injectable()
export class UserInfo {
    userName: string; // 用户名
    userPsw: string; // 用户密码
    userId: string; // 用户员工ID
    userTel: string; // 用户电话号码
    userEmail: string; // 用户密码

    // 构造函数
    constructor(
        userName: string,
        userPsw: string,
        userId: string,
        userTel: string,
        userEmail: string) {
      this.userName = userName;
      this.userPsw = userPsw;
      this.userId = userId;
      this.userTel = userTel;
      this.userEmail = userEmail;
    }
  }
