import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../../../../../share/services/user.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {deleteUser, user} from "@angular/fire/auth";
import {MatTableDataSource} from "@angular/material/table";
import {LoadingService} from 'src/app/modules/share/services/loading.service';

@Component({
  selector: 'app-all-users-table',
  templateUrl: './all-users-table.component.html',
  styleUrls: ['./all-users-table.component.scss']
})
export class AllUsersTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'email', 'fullName', 'phone'];
  dataSource = new MatTableDataSource<any>();
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 5;
  pageIndex: number = 0;
  totalUsers: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userService: UserService,
    private loadingService: LoadingService
  ) {
  }

  ngOnInit() {

    this.getALlUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getALlUsers() {
    this.loadingService.showLoading();
    this.userService.getAllUsers().subscribe((users) => {
      this.loadingService.hideLoading()
      this.dataSource.data = users;
      this.totalUsers = users.length
    })
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  protected readonly user = user;
  protected readonly deleteUser = deleteUser;

  userEmail: any;

  loadUsers() {
    this.loadingService.showLoading();
    if (this.userEmail.trim() != '') {
      this.userService.getUserByEmail(this.userEmail).subscribe(response => {
        this.dataSource.data = response;
        this.loadingService.hideLoading()

      });
    } else {
      this.getALlUsers();
      this.loadingService.hideLoading()
    }
  }
}
