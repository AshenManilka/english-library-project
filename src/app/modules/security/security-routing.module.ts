import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecurityComponent} from "./security.component";
import {LoginContextComponent} from "./components/login-context/login-context.component";
import {LoginFormComponent} from "./components/login-context/inner-items/login-form/login-form.component";
import {RegisterContextComponent} from "./components/register-context/register-context.component";
import {RegisterFormComponent} from "./components/register-context/inner-items/register-form/register-form.component";
import {ForgotPasswordContextComponent} from "./components/forgot-password-context/forgot-password-context.component";
import {
  ForgotPasswordFormComponent
} from "./components/forgot-password-context/inner-items/forgot-password-form/forgot-password-form.component";
import {
  ResendEmailVerificationContextComponent
} from "./components/resend-email-verification-context/resend-email-verification-context.component";
import {
  ResendEmailVerificationFormComponent
} from "./components/resend-email-verification-context/inner-items/resend-email-verification-form/resend-email-verification-form.component";


const routes: Routes = [
  { path: '', component: SecurityComponent,children:[
      {
        path:'',component:LoginContextComponent,children:[
          {
            path:'',redirectTo:'login',pathMatch:'full'
          },
          {
            path:'login',component:LoginFormComponent
          }

        ]
      },
      {
        path:'',component:RegisterContextComponent,children:[
          {
            path: '',redirectTo: 'register',pathMatch: 'full'
          },
          {
            path: 'register',component:RegisterFormComponent
          }
        ]
      },
      {
        path:'',component:ForgotPasswordContextComponent,children:[
          {
            path: '',redirectTo: 'forgot-password',pathMatch: 'full'
          },
          {
            path: 'forgot-password',component:ForgotPasswordFormComponent
          }
        ]
      },
      {
        path:'',component:ResendEmailVerificationContextComponent,children:[
          {
            path: '',redirectTo: 'resend-verification-email',pathMatch: 'full'
          },
          {
            path: 'resend-verification-email',component:ResendEmailVerificationFormComponent
          }
        ]
      },

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {
}
