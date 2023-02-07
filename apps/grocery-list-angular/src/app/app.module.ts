import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, AuthGuard} from './app-routing.module';
import { AppComponent } from './app.component';

import {HomePageModule} from "../pages/home-page/home-page.module";
import {LoginPageModule} from "../pages/login-page/login-page.module";
import {AuthService} from "../services/auth.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    LoginPageModule
  ],
  providers: [
      AuthService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
