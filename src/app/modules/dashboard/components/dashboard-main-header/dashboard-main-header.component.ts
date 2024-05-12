import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { SlideDrawerStateService } from 'src/app/modules/share/services/slide-drawer-state.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/modules/share/services/user.service';
import { UserProfileComponent } from 'src/app/modules/share/components/user-profile/user-profile.component';
import { ConfirmDialogComponent } from 'src/app/modules/share/components/confirm-dialog/confirm-dialog.component';
import { CookieService } from 'ngx-cookie-service';
import { UserLoginTimeService } from 'src/app/modules/share/services/user-login-time.service';

@Component({
  selector: 'app-dashboard-main-header',
  templateUrl: './dashboard-main-header.component.html',
  styleUrls: ['./dashboard-main-header.component.scss']
})
export class DashboardMainHeaderComponent {


  sliderState: boolean = false;
  isSlideDrawerOpen: boolean = false;
  isMobileScreen: boolean | undefined;
  sliderStateGeneralActivities: boolean = false;
  avatar: any;
  userFullName: string = '';

  lastDate: any;



  constructor(
    private slideDrawerStateService: SlideDrawerStateService,
    private el: ElementRef,
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private mediaMatcher: MediaMatcher,
    private userService: UserService,
    private dialog: MatDialog,
    private cookieService: CookieService,
    private userLoginTimeService:UserLoginTimeService
  ) {
    // this.checkUserlastLoginTime();
    this.userLoginTimeService.checkUserlastLoginTime();
  }



  ngOnInit(): void {
    // this.fetchUserData();
    const mediaQuery = this.mediaMatcher.matchMedia('(max-width: 800px)');
    this.isMobileScreen = mediaQuery.matches;


    this.userFullName = this.cookieService.get('userFullName');
    this.getUserAvatar();

    // Subscribe to media query changes
    mediaQuery.addEventListener('change', (event) => {
      this.isMobileScreen = event.matches;
      this.changeDetectorRef.detectChanges();
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



  checkUserlastLoginTime() {
    this.lastDate = this.cookieService.get('lastDate');

    if (!this.lastDate) {
      // // Set a sample date and time if 'lastDate' is not found in the cookie
      // this.lastDate = '2024-03-11T12:00:00'; // Sample date and time format: YYYY-MM-DDTHH:mm:ss
      // this.cookieService.set('lastDate', this.lastDate);
      // console.log('Sample date and time set for lastDate in the cookie.');

      console.log('Cookie Last Date is Empty');

      const currentDate = new Date();
      const formattedCurrentDate = currentDate.toISOString();
      this.cookieService.set('lastDate', formattedCurrentDate);

      this.updateUserloginTime()
    }
    else {
      this.compareUserlastLoginTime();
      console.log('last Date :' + this.lastDate);
    }
  }


  compareUserlastLoginTime() {
    const lastDate = this.cookieService.get('lastDate');
    if (lastDate) {
      const currentDate = new Date();
      const savedDate = new Date(lastDate);
      const timeDifference = currentDate.getTime() - savedDate.getTime();
      const hoursDifference = timeDifference / (1000 * 3600);

      if (hoursDifference > 48) {
        console.log('More than 48 hours have passed since the last date.');
        // Update the cookie with the current date and time
        const formattedCurrentDate = currentDate.toISOString(); // or any other format you prefer
        this.cookieService.set('lastDate', formattedCurrentDate);
        console.log('Cookie last date updated with current date and time.');

        this.updateUserloginTime();
      } else {
        console.log('Less than 48 hours have passed since the last date, No need to Update');
      }
    } else {
      console.log('No last date found in the cookie.');
    }
    // console.log('Date-----------: '+this.cookieService.get('lastDate'));
  }

  updateUserloginTime() {
    console.log('***********Update User login Time***********');

    console.log('User Email : ' + this.cookieService.get('userEmail'));
    console.log('User Full Name : ' + this.cookieService.get('userFullName'));
    console.log('Current Date : ' + Date());
    console.log('********************************************');
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

  userProfile(): void {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      width: '900px',
      height: '350px',
      data: { message: 'ashen' }
    });
    // Handle the result of the dialog
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logOut() {

    // Open a confirmation dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '310px',
      data: { message: 'Are you sure you wish to log out? ' }
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
}

