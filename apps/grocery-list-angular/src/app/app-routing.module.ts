import {Injectable, NgModule} from '@angular/core';
import {CanActivate, Router, RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from "../pages/home-page/home-page.component";
import {LoginPageComponent} from "../pages/login-page/login-page.component";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate  {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate() {
    if (this.authService.user == null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
