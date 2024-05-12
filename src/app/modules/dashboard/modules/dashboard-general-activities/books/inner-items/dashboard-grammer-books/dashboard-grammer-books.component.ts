

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AdminService } from "../../../../../../share/services/admin.service";
import { LoadingService } from 'src/app/modules/share/services/loading.service';
import { CookieService } from 'ngx-cookie-service';
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-dashboard-grammer-books',
  templateUrl: './dashboard-grammer-books.component.html',
  styleUrls: ['./dashboard-grammer-books.component.scss']
})
export class DashboardGrammerBooksComponent implements OnInit {


  paid: boolean = true;

  // grammarBooks: any[] = JSON.parse(this.cookieService.get('userGrammarBookArray') || '[]') as any[];
  grammarBooks: any[] =[];
  userBooks!: any[];
  userEmail!: string | null;
  displayAlert: boolean = false;

  constructor(
    private fireAuthService: AngularFireAuth,
    private adminService: AdminService,
    private loadingService: LoadingService,
    private cookieService: CookieService) {
  }

  ngOnInit() {

    this.userEmail = this.cookieService.get('userEmail');
    if (this.userEmail && this.grammarBooks.length === 0) {
      // this.loadingService.showLoading()
      this.getUsersDetails();
    }

  }
  // getUsersDetails() {
  //   let currentUser = firebase.auth().currentUser;
  //   let email = currentUser?.email;
  //   this.adminService.getAllDataByEmail(email).subscribe(snapshot => {
  //     let ids = snapshot.map(item => item.bookId);
  //     let requestsCompleted = 0;
  //     let allBooks: any[] = [];
  //     if (ids.length === 0) {
  //       console.log('No data');
  //       this.displayAlert = true;
  //       this.loadingService.hideLoading();
  //     } else {
  //       ids.forEach(id => {
  //         this.adminService.getAllBooksByBookIdAndCategory(id, "GRAMMAR").subscribe(r => {
  //           allBooks = allBooks.concat(r);
  //           requestsCompleted++;
  //
  //           if (requestsCompleted === ids.length) {
  //             if (allBooks.length === 0) {
  //               this.displayAlert = true;
  //             } else {
  //               this.displayAlert = false;
  //               // Sort books by name
  //               this.grammarBooks = allBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));
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
        this.adminService.getAllBooksByBookIdsAndCategory1(ids, "GRAMMAR").subscribe(allBooks => {
          if (allBooks.length === 0) {
            this.displayAlert = true;
          } else {
            this.displayAlert = false;
            // Sort books by name
            this.grammarBooks = allBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));
          }
          this.loadingService.hideLoading();
        });
      }
    });
  }
}
