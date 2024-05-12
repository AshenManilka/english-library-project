import {Component, OnInit} from '@angular/core';
import {SlideDrawerStateService} from 'src/app/modules/share/services/slide-drawer-state.service';
import {PdfLinkService} from 'src/app/modules/share/services/pdf-link.service';
import {UserService} from "../../../share/services/user.service";

import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AdminService} from "../../../share/services/admin.service";
import {catchError, forkJoin, of, pipe, switchMap, take} from "rxjs";

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.scss']
})
export class DashboardDefaultComponent implements OnInit {

// slide drawer start--------------
  isSlideDrawerOpen: boolean = false;

  constructor(private slideDrawerStateService: SlideDrawerStateService) {
    this.slideDrawerStateService.isSlideDrawerOpen$.subscribe((isOpen) => {
      this.isSlideDrawerOpen = isOpen;
    });
  }

  userBooks!: any[];
  userEmail!: string | null;
  userPaidBooks: any[] = [];
  ngOnInit(): void {

  }




}
