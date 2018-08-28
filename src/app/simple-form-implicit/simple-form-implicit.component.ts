import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService.model';
import { UserInfo } from '../userInfo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form-implicit',
  templateUrl: './simple-form-implicit.component.html',
  styleUrls: ['./simple-form-implicit.component.css']
})
export class SimpleFormImplicitComponent implements OnInit {
  // Tel信息为put提交，整体更新，定义UserInfo实体对象
  userInfo: UserInfo;
  myForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService) {
    this.myForm = fb.group({
      'tel': ['', Validators.required]
    });
    this.userInfo = new UserInfo('', '', '', '', '');
  }

  // 更新Tel信息，参数为电话号码
  updateTel(tel: string) {
    console.log('You submitted tel:', tel);
    // 获取当前登录用户名
    const name = this.userService.getLogUser();
    // 以用户名作为唯一ID获取用户对象实体
    this.userService.getThisUser(name)
      .subscribe( (res: UserInfo) => {
        this.userInfo = res;
        // 更新用户对象的Tel属性
        this.userInfo.userTel = tel;
        // put更新当前用户对象数据，参数为UserInfo实体对象
        this.userService.updateUserTel(this.userInfo).subscribe();
        console.log('Update to user:', name, 'successfully');
        alert('Update Telephone number successfully');
      });
  }
  ngOnInit() {
  }

}
