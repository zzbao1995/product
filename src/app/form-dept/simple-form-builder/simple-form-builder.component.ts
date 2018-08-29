import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-simple-form-builder',
  templateUrl: './simple-form-builder.component.html',
  styleUrls: ['./simple-form-builder.component.css']
})
export class SimpleFormBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService) {
    // group 初始化表单，添加两个验证方法
    this.myForm = fb.group({
      'email': ['', Validators.compose([Validators.required, this.emailValidator])]
    });
   }

   // 验证是否含有‘@’字符，若不含有，将invalidEmail置为true
   emailValidator(control: FormControl): {[s: string]: boolean} {
     if (!control.value.match('@')) {
       return {invalidEmail: true};
     }
   }

   // 更新email信息
   updateEmail(email: string): void {
     console.log('Your submitted email:', email);
     // 获取当前登录用户名
     const name = this.userService.getLogUser();
     // 根据用户名直接更新登录用户的email属性，patch局部更新方法
     this.userService.updateUserEmail(name, email).subscribe();
     alert('Update Email successfully');
   }
  ngOnInit() {
  }

}
