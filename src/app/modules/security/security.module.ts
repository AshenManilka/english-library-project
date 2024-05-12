import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import {RegisterFormComponent} from "./components/register-context/inner-items/register-form/register-form.component";
import {RegisterContextComponent} from "./components/register-context/register-context.component";
import {SecurityHeaderComponent} from "./components/security-header/security-header.component";
import {LoginContextComponent} from "./components/login-context/login-context.component";
import {LoginFormComponent} from "./components/login-context/inner-items/login-form/login-form.component";
import {ForgotPasswordContextComponent} from "./components/forgot-password-context/forgot-password-context.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ForgotPasswordFormComponent } from './components/forgot-password-context/inner-items/forgot-password-form/forgot-password-form.component';
import { ShareModule } from '../share/share.module';
import { LoadingService } from '../share/services/loading.service';
import { ResendEmailVerificationContextComponent } from './components/resend-email-verification-context/resend-email-verification-context.component';
import { ResendEmailVerificationFormComponent } from './components/resend-email-verification-context/inner-items/resend-email-verification-form/resend-email-verification-form.component';

@NgModule({
  declarations: [
    SecurityComponent,
    LoginFormComponent,
    RegisterContextComponent,
    RegisterFormComponent,
    SecurityHeaderComponent,
    LoginContextComponent,
    ForgotPasswordContextComponent,
    ForgotPasswordFormComponent,
    ResendEmailVerificationContextComponent,
    ResendEmailVerificationFormComponent,

  ],
  exports: [
  ],
    imports: [
        CommonModule,
        SecurityRoutingModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        NgOptimizedImage,
        ShareModule,
        FormsModule
    ],
  providers:[
    LoadingService,

  ]
})
export class SecurityModule { }
