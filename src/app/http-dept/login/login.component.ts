import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // 使用FormBuilder构建表单，由FormGroup和FormControl组成
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService) {
    // 初始化登录表单，group方法
    this.loginForm = fb.group({
      'user': [''],
      'psw': ['']
    });
   }

   // 登录方法，参数为用户名和密码
   logIn(name: string, password: string) {
     console.log('the user: ', name, 'the password: ', password);
     // 调用UserService服务类的haveThisUser方法，判断数据库有无此用户
     this.userService.haveThisUser(name, password)
     .subscribe(isExist => {
        if (isExist) {
          alert('Log In Successfully.\nYou can enter other pages.');
          // 若存在此用户则登录成功，将用户名存入到H5页面键值对中，界面渲染为登录成功界面
          localStorage.setItem('username', name);
        } else {
          // 密码错误或者无此用户，则进行提示
          alert('Wrong Password Or Sign Up First.');
        }
      });
   }

  ngOnInit() {
  }

}
