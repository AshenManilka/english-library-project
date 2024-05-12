import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../../../share/services/user.service";
import { Title } from "@angular/platform-browser";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  rememberMe: boolean = true;
  data!: any[];

  ngOnInit() {
    const rememberedEmail = this.cookieService.get('rememberMeToken');
    if (rememberedEmail) {
      this.loginForm.patchValue({ email: rememberedEmail });
    }
    this.title.setTitle("Login");
    this.getLastLoggedInUsers();
  }
  toggleRememberMe() {
    this.rememberMe = !this.rememberMe;
  }
  constructor(private userService: UserService, private title: Title, private cookieService: CookieService) {
  }
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(true) // Set initial value of rememberMe to false
  });

  getEmail() {
    return this.loginForm.get('email');
  }
  getPassword() {
    return this.loginForm.get('password');
  }

  login() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    this.userService.signIn(email, password, this.rememberMe);
    if (this.rememberMe && email) {
      this.cookieService.set('rememberMeToken', email);
    } else {
      this.cookieService.delete('rememberMeToken');
    }
  }

  getLastLoggedInUsers() {
    this.userService.getAllUsersByRecentLogin().subscribe((data) => {
      this.data = data;
    })
  }
}
