import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from "../../../../../../../share/services/user.service";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { AdminService } from "../../../../../../../share/services/admin.service";
import { FormControl, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { LoadingService } from "../../../../../../../share/services/loading.service";

@Component({
  selector: 'app-all-user-access-table',
  templateUrl: './all-user-access-table.component.html',
  styleUrls: ['./all-user-access-table.component.scss']
})
export class AllUserAccessTableComponent implements OnInit, AfterViewInit {

  ngOnInit() {
    this.getAllUsersBooks();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'email', 'book', 'access', 'option'];
  dataSource = new MatTableDataSource<any>();
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 5;
  pageIndex: number = 0;
  totalSubscriberUsers: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  formArray: FormGroup[] = [];

  constructor(private adminService: AdminService, private loadingService: LoadingService) {}

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  userEmail: string = "";

  getAllUsersBooks(){
    this.loadingService.showLoading()
    this.adminService.getAllUsersBooks().subscribe((videos) => {
      this.dataSource.data = videos;
      this.totalSubscriberUsers = videos.length;
      this.initFormArray(videos.length); // Initialize form controls
      this.loadingService.hideLoading();
    }, error => {
      this.loadingService.hideLoading();
    });
  }

  loadData() {
    if (this.userEmail.trim() != '') {
      this.adminService.getAllUsersBooksByEmail(this.userEmail).subscribe(response => {
        this.dataSource.data = response;
        this.initFormArray(response.length);
      });
    } else {
      this.getAllUsersBooks();
    }
  }

  removeAccess(uid: any) {
    if (confirm('Are you sure?')) {
      this.loadingService.showLoading();
      this.adminService.deleteAccess(uid);
    }
  }
  initFormArray(length: number) {
    this.formArray = Array.from({ length }, () => new FormGroup({ sliderToggle3: new FormControl(true) }));
  }
}
