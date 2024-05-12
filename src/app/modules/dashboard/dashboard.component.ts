import { Component } from '@angular/core';
import {UserService} from "../share/services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private userService:UserService) {
  }

  logOut() {
    this.userService.logOut();
  }
}
