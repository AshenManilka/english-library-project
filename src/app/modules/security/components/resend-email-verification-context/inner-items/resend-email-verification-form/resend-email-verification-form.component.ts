import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../../share/services/user.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-resend-email-verification-form',
  templateUrl: './resend-email-verification-form.component.html',
  styleUrls: ['./resend-email-verification-form.component.scss']
})
export class ResendEmailVerificationFormComponent implements OnInit{

  ngOnInit() {
    this.title.setTitle("Resend Verification")
  }


  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  });

  constructor(private userService: UserService,private title:Title) {
  }

  getEmail() {
    return this.form.get('email');
  }

  resendVerificationLink() {
    let email: any = this.form.get('email')?.value;
    console.log(email)
    this.userService.resendVerificationEmail(email)
  }
}
