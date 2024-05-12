import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminService} from "./modules/share/services/admin.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit() {
    this.adminService.getAllExpiredUsersBooks().subscribe(expiredUsersBooks => {
      let ids: any[] = expiredUsersBooks.map(doc => doc.id);
      this.adminService.deleteExpiredUserBooksByIds(ids);
    })
  }


  constructor(private adminService: AdminService) {

  }

  title = 'Any Idea In English';
}
