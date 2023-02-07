import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private router: Router, private authService: AuthService) {}
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  async onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      await this.authService.signIn(this.form.value.email!, this.form.value.password!);
      await this.router.navigateByUrl('/login')
    }
  }
}
