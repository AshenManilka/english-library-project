import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/modules/share/services/snack-bar.service';

@Component({
  selector: 'app-console-verification-pool',
  templateUrl: './console-verification-pool.component.html',
  styleUrls: ['./console-verification-pool.component.scss']
})
export class ConsoleVerificationPoolComponent implements OnInit {

  constructor (private router:Router,    private snackBarService:SnackBarService,){
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.snackBarService.snackBar("Welcome Admin", "close", 5000, 'ltr', 'center', 'top');
      this.router.navigate(['/console/playground/home']);
    }, 3000);
  }
}
