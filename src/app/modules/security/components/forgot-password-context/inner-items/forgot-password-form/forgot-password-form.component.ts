import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../../share/services/user.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit{

  ngOnInit() {
    this.title.setTitle("Security | Forgot Password")
  }

  constructor(private userService:UserService, private title:Title) {
  }

  forgotPasswordForm = new FormGroup({
    email:new FormControl("",[Validators.email,Validators.required])
  });

  getEmail(){
    return this.forgotPasswordForm.get('email')
  }

  forgotPassword() {
    const email = this.forgotPasswordForm.get("email")?.value;
    this.userService.forgotPassword(email);
  }
}
