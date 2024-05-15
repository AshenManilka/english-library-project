import {Component, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../../../share/services/admin.service";
import {LoadingService } from 'src/app/modules/share/services/loading.service';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {SnackBarService} from "../../../../../../share/services/snack-bar.service";
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-new-user-access',
  templateUrl: './new-user-access.component.html',
  styleUrls: ['./new-user-access.component.scss']
})

export class NewUserAccessComponent implements OnInit {

  books: any[] = [];
  startDate: Date = new Date();
  endDate: Date = new Date();
  payedDate: Date = new Date();
  all: Array<any> = [];
  grantedAccesses: any[] = [];
  isLifetime = false;

  constructor(
    private fireAuthService:AngularFireAuth,
    private adminService: AdminService,
    private loadingService:LoadingService,
    private snackBarService:SnackBarService
    ) {
  }

  accessForm= new FormGroup({
    bookId: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    accessType: new FormControl("", [Validators.required]),
    startDate: new FormControl(this.startDate, Validators.required),
    endDate: new FormControl(this.endDate, Validators.required),
    payedDate: new FormControl(this.payedDate, Validators.required),
    payedAmount: new FormControl(0),
  })

  submitAccess() {
    this.loadingService.showLoading();
    let bookId: string | any = this.accessForm.get("bookId")?.value;
    let email: string | any = this.accessForm.get("email")?.value;
    let accessType: string | any = this.accessForm.get("accessType")?.value;
    let startDate: any = this.accessForm.get("startDate")?.value;
    let endDate: any = this.accessForm.get("endDate")?.value;
    let payment: any = this.accessForm.get("payedAmount")?.value;

    let formattedStartDate = startDate.toISOString().substring(0, 10);
    let formattedEndDate = endDate.toISOString().substring(0, 10);

    this.adminService.addPermissions(email, bookId,accessType, formattedStartDate, formattedEndDate)
      .then(() => {
        if (accessType === 'shortTimeSubscriber') {
          this.adminService.updateUserSubscription(email, 'shortTimeSubscriber', new Date(), payment);
        } else if (accessType === 'yearlySubscriber') {
          this.adminService.updateUserSubscription(email, 'yearlySubscriber', new Date(), payment);
        } else if (accessType === 'yearlySubscriber') {
          this.adminService.updateUserSubscription(email, 'lifeTimeSubscriber', new Date(), payment);
        }
      })
      .catch((error) => {
        console.error('Error granting user access:', error);
        this.snackBarService.snackBar("Error granting user access.", "close", 5000, 'ltr', 'center', 'top');
        this.loadingService.hideLoading();
      });
  }

  ngOnInit(): void {
    this.loadBooks();
      }

  loadBooks() {
    this.adminService.getAllBooks().subscribe(response => {
      this.books = response;
    });
  }


  onAccessTypeChange(event: MatSelectChange) {

    if(event.value === "lifeTimeSubscriber"){
      this.isLifetime = true;
    }
    else{
      this.isLifetime = false;
    }


  }


}
