import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ArticleComponent } from './article/article.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SimpleFormComponent, childRoutes } from './simple-form/simple-form.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { ArticleShowComponent } from './article-show/article-show.component';
import { InventoryRowComponent } from './inventory-row/inventory-row.component';
import { SimpleFormImplicitComponent } from './simple-form-implicit/simple-form-implicit.component';
import { SimpleFormBuilderComponent } from './simple-form-builder/simple-form-builder.component';
import { UserService } from './userService.model';
import { LoggedInGuard } from '../guards/loggedIn.guard';
import { NotLoggedInGuard } from '../guards/notLoggedIn.guard';
import { UserInfo } from './userInfo.model';
import { ObserveComponent } from './observe/observe.component';

// 定义一级路由
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent, canActivate: [NotLoggedInGuard]},
  {path: 'article', component: ArticleComponent, canActivate: [LoggedInGuard]},
  {path: 'inventory', component: InventoryComponent,  canActivate: [LoggedInGuard]},
  {path: 'simpleForm', component: SimpleFormComponent,  canActivate: [LoggedInGuard], children: childRoutes},
  {path: 'simpleHttp', component: SimpleHttpComponent,  canActivate: [LoggedInGuard]},
  {path: 'observable', component: ObserveComponent,  canActivate: [LoggedInGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ArticleComponent,
    InventoryComponent,
    SimpleFormComponent,
    SimpleHttpComponent,
    ArticleShowComponent,
    InventoryRowComponent,
    SimpleFormImplicitComponent,
    SimpleFormBuilderComponent,
    ObserveComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
              UserInfo,
              UserService,
              LoggedInGuard,
              NotLoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
