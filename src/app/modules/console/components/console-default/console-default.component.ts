import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SlideDrawerStateService} from 'src/app/modules/share/services/slide-drawer-state.service';
import {UserService} from "../../../share/services/user.service";
import {BookService} from "../../../share/services/book.service";
import {VideoService} from "../../../share/services/video.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {LoadingService} from 'src/app/modules/share/services/loading.service';


interface ProgressConfig {
  circularProgress: HTMLElement | null;
  progressValue: HTMLElement | null;
  progressEndValue: number;
  gradientColor: string;
}

@Component({
  selector: 'app-console-default',
  templateUrl: './console-default.component.html',
  styleUrls: ['./console-default.component.scss']
})
export class ConsoleDefaultComponent implements OnInit, AfterViewInit {

  ngOnInit() {
    this.getUserCount();
    this.getBookCount();
    this.getVideoCount();
    this.getAllSubscribedUsersCount();
    this.loadAllRecentLoggedInUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(
    private slideDrawerStateService: SlideDrawerStateService,
    private userService: UserService,
    private bookService: BookService,
    private videoService: VideoService,
    private loadingService:LoadingService
  ) {
    this.slideDrawerStateService.isSlideDrawerOpen$.subscribe((isOpen) => {
      this.isSlideDrawerOpen = isOpen;
    });



  }


  usersCount: number = 0;
  booksCount: number = 0;
  videoCount: number = 0;
  subscribeUserCount: number = 0;
  displayedColumns: string[] = ['position', 'email', 'fullName', 'phone', 'loginTime'];
  dataSource = new MatTableDataSource<any>();
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 5;
  pageIndex: number = 0;
  totalRecentLoginUsers: number = 0;
  isSlideDrawerOpen: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  userEmail: any;

  getUserCount() {
    this.userService.getAllUsersCount().subscribe(response => {
      this.usersCount = response;
    })
  }

  getBookCount() {
    this.bookService.getAllBooksCount().subscribe(response => {
      this.booksCount = response;
    })
  }

  getVideoCount() {
    this.videoService.getAllVideosCount().subscribe(response => {
      this.videoCount = response;
    })
  }

  getAllSubscribedUsersCount(){
    this.userService.getAllSubscribedUsers().subscribe(response=>{
      this.subscribeUserCount = response.length
    })
  }

  loadAllRecentLoggedInUsers() {
    this.loadingService.showLoading();
    this.userService.getAllUsersByRecentLogin().subscribe(response => {
      let filteredUsers = response.filter(user=>user.isUser === true);
      this.dataSource.data = filteredUsers;
      this.totalRecentLoginUsers = filteredUsers.length;
      this.loadingService.hideLoading();
    })
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  loadRecentLoggedInUsers() {
    this.loadingService.showLoading();
    if (this.userEmail.trim() != '') {
      this.userService.getUserByEmail(this.userEmail).subscribe(response => {
        this.dataSource.data = response.filter(user => user.loginTime);
        this.loadingService.hideLoading();
      });
    } else {
      this.loadAllRecentLoggedInUsers();
      this.loadingService.hideLoading()
    }
  }

}
