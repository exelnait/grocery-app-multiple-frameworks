import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {LoginPageComponent} from './login-page.component';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    exports: [
        LoginPageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class LoginPageModule {
}
