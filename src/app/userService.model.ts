import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserInfo } from './userInfo.model';

// 用户数据服务模型，定义与Web API交互等的用户数据处理方法
@Injectable()
export class UserService {
  // 基础URL：api/[controller]
  baseUrl = 'http://localhost:63294/api/UserInfoes';
  // haveThisUser方法使用的URL
  isExistUrl = 'http://localhost:63294/api/UserInfoes/isExist';
  // 初始化私有的http
  constructor(private http: HttpClient) { }

  // 判断数据库是否有此用户，调用get方法，传递用户名和密码，返回Boolean
  haveThisUser(name: string, password: string) {
    return this.http.get<boolean>(this.isExistUrl, { params: { 'name': name, 'password': password } });
  }

  // 获取数据库用户的实体对象，调用get方法，传递用户名作进行唯一ID查找
  getThisUser(name: string) {
    return this.http.get<UserInfo>(`${this.baseUrl}/${name}`);
  }

  // 新建用户，向数据库写入新用户实体对象，调用post方法，传递UserInfo实体对象
  createNewUser(userInfo: UserInfo) {
    return this.http.post<any>(this.baseUrl, userInfo);
  }

  // 更新/修改用户实体的电话属性，调用put方法进行实体全部属性的更新，传递userInfo实体对象
  updateUserTel(userInfo: UserInfo) {
    return this.http.put<any>(`${this.baseUrl}/${userInfo.userName}`, userInfo);
  }

  // 更新/修改用户实体的Email属性，调用patch方法进行局部更新，仅更新Email属性，传递JSON数组请求体
  // （op为操作方法，path为操作属性，value为修改后的值）
  updateUserEmail(name: string, email: string) {
    return this.http.patch<any>(`${this.baseUrl}/${name}`, [{
      'op': 'replace', 'path': '/UserEmail', 'value': email
    }]);
  }

  // 登出当前账户，清除H5键值对中保存的信息
  logOut() {
    if (window.confirm('Are you sure to log out?')) {
      localStorage.removeItem( 'username' );
      return false;
    }
  }

  // 获取当前登录用户的用户名，在H5键值对中获得
  getLogUser() {
    return localStorage.getItem( 'username' );
  }

  // 判断当前是否有用户登录，即判断H5键值对是否有数据
  isLoggedIn(): boolean {
    return this.getLogUser() !== null;
  }

  // 用户注册时，检查输入密码和确认密码是否一致
  checkPsw(password: string, passowrdAga: string): boolean {
    if (password === passowrdAga) {
      return true;
    } else {
      return false;
    }
  }

  // 用户注册时，检查提交信息是否合法
  checkInfo(name: string, password: string, passowrdAga: string, employeeId: string): boolean {
    if (name === null || password === null  || passowrdAga === null || employeeId === null) {
      return false;
    }
    return true;
  }
}
