import { CookieService } from 'ngx-cookie-service';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/modules/share/services/scroll.service';
import { NavbarService } from 'src/app/modules/share/services/navbar.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { getAuth } from 'firebase/auth';
import { UserService } from 'src/app/modules/share/services/user.service';
import { ConfirmDialogComponent } from 'src/app/modules/share/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginTimeService } from 'src/app/modules/share/services/user-login-time.service';
import { LoadingService } from 'src/app/modules/share/services/loading.service';

@Component({
  selector: 'app-main-header-nav-bar',
  templateUrl: './main-header-nav-bar.component.html',
  styleUrls: ['./main-header-nav-bar.component.scss']
})
export class MainHeaderNavBarComponent  implements OnInit {



  navbarState: string | undefined;
  transparent:boolean = true;
  otherComp:boolean=false;
  user:any;
  userEmail : string | undefined ;

  // user: Observable<firebase.User|null>;

  constructor(private elRef: ElementRef,
      private scrollService: ScrollService,
      private navbarService: NavbarService,
      // private angularFireAuth:AngularFireAuth,
      private userService:UserService,
      private dialog: MatDialog,
      private userLoginTimeService:UserLoginTimeService,
      private cookieService:CookieService,
      private loadingService:LoadingService

      )
       {
        this.userLoginTimeService.checkUserlastLoginTime();
       }

    ngOnInit(): void {
    this.userEmail = this.cookieService.get('userEmail')
    // console.log('user Email '+  this.userEmail );

    this.navbarService.getNavbarState().subscribe(state => {
      this.navbarState = state;
      // console.log('  this.navbarState :' +   this.navbarState);
      if(state === 'otherComponent'){
        this.otherComp = true;
      }
    });
    const div = this.elRef.nativeElement.querySelector('#navbar-avo');
    div.classList.add('bg-transparent');

    this. loadingSpinner();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const div = this.elRef.nativeElement.querySelector('#navbar-avo');
    if (window.scrollY <= 300 && this.navbarState != 'otherComponent') {
      div.classList.remove('bg-light');
      div.classList.add('bg-transparent');
      this.otherComp = false
      this.transparent= true;


    } else if(window.scrollY >= 300 && this.navbarState != 'otherComponent')   {
      div.classList.remove('bg-transparent');
      div.classList.add('bg-light');
      this.transparent= false;

    }
    else{
      div.classList.add('bg-transparent');
      this.otherComp = false;

      if(this.navbarState === 'otherComponent'){
        this.otherComp = true;
      }
    }
    this.navbarService.getNavbarState().subscribe(state => {
      this.navbarState = state;
      // console.log('  this.navbarState :' +   this.navbarState);
      if(state != 'otherComponent'){
        this.otherComp = false;
      }
    });

  }


  loadingSpinner(){
    this.loadingService.showLoading();
    setTimeout(() => {
      this.loadingService.hideLoading();
    }, 1500);
  }

  collapseNavbar() {
    // Check if the navbar is in mobile view and is currently expanded
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (window.innerWidth < 992 && navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler?.dispatchEvent(new Event('click')); // Simulate a click event on the navbar toggler button
    }
  }

  collapseNavbarHome() {
    this.transparent = true;
      this.otherComp =false;
    // Check if the navbar is in mobile view and is currently expanded
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (window.innerWidth < 992 && navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler?.dispatchEvent(new Event('click')); // Simulate a click event on the navbar toggler button
    }
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this. collapseNavbar();
  }

  logOut() {

    this.collapseNavbar()
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
        // console.log('Log out canceled by user');
      }
    });
  }
}
