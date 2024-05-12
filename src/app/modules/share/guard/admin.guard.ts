import { user } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { session } from 'src/utils/sessionTest';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root' // This makes it available in the root injector
})
export class adminGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router, private userService:UserService) {}

  canActivate(){
    if ( 'true' === this.userService.isAdminUser()) {
      // User is authenticated
      // console.log('Admin is authenticated');
      // this.router.navigate(['/console/playground/home']);
      return true;
    } else {
      // User is not authenticated, redirect to login page
      // console.log('Redirect to login page from Admin');
      this.router.navigate(['/security/login']);
      return false;
    }
  }
}
