import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../../../../share/services/admin.service";
import {LoadingService} from 'src/app/modules/share/services/loading.service';
import {CookieService} from 'ngx-cookie-service';
import firebase from "firebase/compat/app";


@Component({
  selector: 'app-dashboard-dialogues-books',
  templateUrl: './dashboard-dialogues-books.component.html',
  styleUrls: ['./dashboard-dialogues-books.component.scss']
})
export class DashboardDialoguesBooksComponent implements OnInit {

  constructor(
    // private fireAuthService:AngularFireAuth,
    private adminService: AdminService,
    private loadingService: LoadingService,
    private cookieService: CookieService
  ) {
  }

  paid: boolean = true;
  dialoguesBooks: any[] = JSON.parse(this.cookieService.get('userDialoguesBookArray') || '[]') as any[];
  userBooks!: any[];
  userEmail!: string | null;
  displayAlert: boolean = false;

  ngOnInit() {
    this.userEmail = this.cookieService.get('userEmail');
    if (this.userEmail && this.dialoguesBooks.length === 0) {
      this.loadingService.showLoading()
      this.getUsersDetails();
    }



  }

  // getUsersDetails() {
  //
  //   let currentUser = firebase.auth().currentUser;
  //   let email = currentUser?.email;
  //   this.adminService.getAllDataByEmail(email).subscribe(snapshot => {
  //     let ids = snapshot.map(item => item.bookId);
  //     let requestsCompleted = 0;
  //     let allBooks: any[] = [];
  //
  //     if (ids.length === 0) {
  //       console.log('No data');
  //       this.displayAlert = true;
  //       this.loadingService.hideLoading();
  //     } else {
  //       ids.forEach(id => {
  //         this.adminService.getAllBooksByBookIdAndCategory(id, "DIALOGUES").subscribe(r => {
  //           allBooks = allBooks.concat(r);
  //           requestsCompleted++;
  //
  //           if (requestsCompleted === ids.length) {
  //             if (allBooks.length === 0) {
  //               this.displayAlert = true;
  //             } else {
  //               this.displayAlert = false;
  //               // Sort books by name
  //               this.dialoguesBooks = allBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));
  //             }
  //             this.loadingService.hideLoading();
  //           }
  //         });
  //       });
  //     }
  //   });
  // }

  getUsersDetails() {
    let currentUser = firebase.auth().currentUser;
    let email = currentUser?.email;
    this.adminService.getAllDataByEmail(email).subscribe(snapshot => {
      let ids = snapshot.map(item => item.bookId);

      if (ids.length === 0) {
        console.log('No data');
        this.displayAlert = true;
        this.loadingService.hideLoading();
      } else {
        this.adminService.getAllBooksByBookIdsAndCategory1(ids, "DIALOGUES").subscribe(allBooks => {
          if (allBooks.length === 0) {
            this.displayAlert = true;
          } else {
            this.displayAlert = false;
            // Sort books by name
            this.dialoguesBooks = allBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));
          }
          this.loadingService.hideLoading();
        });
      }
    });
  }

}
