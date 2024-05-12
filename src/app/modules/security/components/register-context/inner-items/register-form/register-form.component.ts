import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../../share/services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  ngOnInit() {
    this.title.setTitle("Security | Register")
  }

  constructor(private userService: UserService, private title: Title) {
  }

  registerForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    fullName: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required,Validators.minLength(6)]),
  });

  getEmail():any{
    return this.registerForm.get('email')
  }
  getFullName():any{
    return this.registerForm.get('fullName')
  }
  getPhone():any{
    return this.registerForm.get('phone')
  }
  getPassword():any{
    return this.registerForm.get('password')
  }

  register() {
    let email = this.registerForm.get('email')?.value;
    let fullName = this.registerForm.get('fullName')?.value;
    let phone = this.registerForm.get('phone')?.value;
    let password = this.registerForm.get('password')?.value;

    this.userService.signUp(email, password, fullName, phone);
  }
}
