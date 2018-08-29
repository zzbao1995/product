import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { UserInfo } from '../../service/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // 注册表单
  signupForm: FormGroup;
  // 注册用户对象
  newUser: UserInfo;

  // 构造函数，group初始化表单
  constructor(fb: FormBuilder, private userService: UserService, private http: HttpClient) {
    this.signupForm = fb.group({
      'user': ['', Validators.required],
      'psw': ['', Validators.required],
      'pswAga': ['', Validators.required],
      'employeeId': ['', Validators.required]
    });
   }

   // 注册方法，前端点击调用，参数为表单数据
   signUp(name: string, passowrd: string, passowrdAga: string, employeeId: string) {
     // 调用服务类的checkInfo方法，检查注册信息是否完整
     if (this.userService.checkInfo(name, passowrd, passowrdAga, employeeId)) {
       // 若注册信息完整，检测密码是否一致
       if (this.userService.checkPsw(passowrd, passowrdAga)) {
         // 注册信息合法，则创建UserInfo实体对象
         this.newUser = new UserInfo(name, passowrd, employeeId, '', '');
         // 调用服务类createNewUser方法，向数据库post提交
         this.userService.createNewUser(this.newUser).subscribe();
         console.log('Create user success', this.newUser);
         alert(`Create User:${name} successfully.`);
       } else {
        alert('Failed.\nPassword must be identical');
        return false;
       }
     } else {
       alert('Failed.\nInformation is  not complete.');
       return false;
     }
   }

  ngOnInit() {
  }

}
