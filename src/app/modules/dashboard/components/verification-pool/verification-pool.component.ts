import { Component, OnInit } from '@angular/core';
import { session } from 'src/utils/sessionTest';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/modules/share/services/snack-bar.service';
import { UserService } from 'src/app/modules/share/services/user.service';

@Component({
  selector: 'app-verification-pool',
  templateUrl: './verification-pool.component.html',
  styleUrls: ['./verification-pool.component.scss']
})
export class VerificationPoolComponent implements OnInit{


  constructor(private router: Router,
        private snackBarService:SnackBarService,
        private userService:UserService
    ) {}

  ngOnInit(): void {
   this. redirectToCorrectPath();
  }
  redirectToCorrectPath(): void {
    setTimeout(()=>{
      if ( 'true' === this.userService.isAdminUser()) {

        this.snackBarService.snackBar("Welcome Admin", "close", 5000, 'ltr', 'center', 'top');
        this.router.navigate(['/console/playground/home']);
      } else {
        // console.log('in dashboard : ' + this.userService.isAdminUser() );
        this.snackBarService.snackBar("Welcome User"  , "close", 5000, 'ltr', 'center', 'top');
        this.router.navigate(['/dashboard/playground']);
      }
    },3000);

  }

}

