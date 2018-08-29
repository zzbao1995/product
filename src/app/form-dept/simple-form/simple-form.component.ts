import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SimpleFormImplicitComponent } from '../simple-form-implicit/simple-form-implicit.component';
import { SimpleFormBuilderComponent } from '../simple-form-builder/simple-form-builder.component';

// 定义子路由
export const childRoutes: Routes = [
  {path: '', redirectTo: 'tel', pathMatch: 'full'},
  {path: 'tel', component: SimpleFormImplicitComponent},
  {path: 'email', component: SimpleFormBuilderComponent}
];

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
