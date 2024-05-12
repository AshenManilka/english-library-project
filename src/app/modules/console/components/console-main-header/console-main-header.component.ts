import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {SlideDrawerStateService} from 'src/app/modules/share/services/slide-drawer-state.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Subscription} from 'rxjs';
// import {
//   UserProfileComponent
// } from "../../modules/general-activities/user-management/user-manage/user-profile/user-profile.component";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { ConfirmDialogComponent } from 'src/app/modules/share/components/confirm-dialog/confirm-dialog.component';
import { UserService } from 'src/app/modules/share/services/user.service';
import { UserProfileComponent } from 'src/app/modules/share/components/user-profile/user-profile.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-console-main-header',
  templateUrl: './console-main-header.component.html',
  styleUrls: ['./console-main-header.component.scss']
})
export class ConsoleMainHeaderComponent implements OnInit {


  sliderState: boolean = false;
  isSlideDrawerOpen: boolean = false;
  isMobileScreen: boolean | undefined;
  sliderStateGeneralActivities: boolean = false;
  userData: any;
  avatar:any;
  userFullName:string = '';

  constructor(
    private slideDrawerStateService: SlideDrawerStateService,
    private el: ElementRef,
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private mediaMatcher: MediaMatcher,
    private dialog: MatDialog,
    private fireAuthService: AngularFireAuth,
    private fireStoreService: AngularFirestore,
    private userService:UserService,
    private cookieService:CookieService

  ) {
  }

  ngOnInit(): void {
    // this.fetchUserData();
    const mediaQuery = this.mediaMatcher.matchMedia('(max-width: 800px)');
    this.isMobileScreen = mediaQuery.matches;

    // Subscribe to media query changes
    mediaQuery.addEventListener('change', (event) => {
      this.isMobileScreen = event.matches;
      this.changeDetectorRef.detectChanges();
    });


    this.userFullName = this.cookieService.get('userFullName');
    this.getUserAvatar();

    this.fireAuthService.authState.subscribe(user => {
      if (user) {
        this.fireStoreService.collection('Users').doc(user.uid).valueChanges().subscribe((data: any) => {
          this.userData = data;
        });
      } else {
        // Handle user not logged in
      }
    });
  }

  getUserAvatar(){
    this.avatar = this.cookieService.get('userAvatar');
    if(!this.avatar){
      this.userService.getUserByEmail(this.cookieService.get('userEmail')).subscribe(userDataArray => {
        if (userDataArray && userDataArray.length > 0) {
          const userData = userDataArray[0];
          this.avatar = userData.avatar;
          this.cookieService.set("userAvatar",userData.avatar ? userData.avatar:'');
        }
      });
    }
  }


  // Use a single method for both mouse enter and leave events
  onMouseToggle(shouldOpen: boolean) {
    this.isSlideDrawerOpen = shouldOpen;
    this.slideDrawerStateService.toggleSlideDrawer(shouldOpen);
  }

  // Toggle the class when called
  toggleClass() {
    if (this.isMobileScreen) {
      this.isSlideDrawerOpen = !this.isSlideDrawerOpen;
    }
  }

  toggleSliderStateGeneralActivities() {
    this.sliderStateGeneralActivities = !this.sliderStateGeneralActivities;
  }


  @HostListener('scroll', ['$event'])
  onScroll(event: Event): void {
    const menuContainer = this.el.nativeElement.querySelector('.menu_container');

    // Check if the div has a vertical scrollbar
    const hasVerticalScrollbar = menuContainer.scrollHeight > menuContainer.clientHeight;

    // If a scrollbar is present, add a class to another div
    if (hasVerticalScrollbar) {
      this.renderer.addClass(this.el.nativeElement.querySelector('.sidebar'), '.close-with-scroll');
    } else {
      this.renderer.removeClass(this.el.nativeElement.querySelector('.sidebar'), '.close-with-scroll');
    }
  }

  // openProfileManger() {
  //   if (this.userData) {
  //     const dialogRef = this.dialog.open(UserProfileComponent, {
  //       data: {userData: this.userData}
  //     });

  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //       // You can perform additional actions after the dialog is closed
  //     });
  //   }
  // }

  logOut() {
    // Open a confirmation dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '310px',
      data: { message: 'Are you sure you wish to log out? '}
    });
    // Close the confirmation dialog and handle the result
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.userService.logOut();
        // Clear the session storage item
        sessionStorage.removeItem('currentUser');
      } else {
        // User canceled, do nothing
        console.log('Log out canceled by user');
      }
    });
  }




    userProfile(): void {

      const dialogRef = this.dialog.open(UserProfileComponent, {
        width: '900px',
        height:'350px',
        data: { message: 'ashen' }
      });
      // Handle the result of the dialog
      dialogRef.afterClosed().subscribe(result => {
      });
  }
}
