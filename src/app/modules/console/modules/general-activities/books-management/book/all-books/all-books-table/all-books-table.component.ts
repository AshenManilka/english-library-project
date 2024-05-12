import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from "../../../../../../../share/services/book.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatDialog} from "@angular/material/dialog";
import {ViewBookComponent} from "../view-book/view-book.component";
import {MatTableDataSource} from "@angular/material/table";
import {BookDto} from "../../../../../../../share/dto/bookDto";
import { LoadingService } from 'src/app/modules/share/services/loading.service';

@Component({
  selector: 'app-all-books-table',
  templateUrl: './all-books-table.component.html',
  styleUrls: ['./all-books-table.component.scss']
})

export class AllBooksTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'bookId', 'bookName', 'category',  'options'];
  dataSource = new MatTableDataSource<any>();
  bookName = "";
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 5;
  pageIndex: number = 0;
  totalBooks: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private bookService: BookService,
    public dialog: MatDialog,
    private loadingService:LoadingService

    ) { }

  ngOnInit() {
    this.loadingService.showLoading();
    this.getAllBooks();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe((book) => {
      this.dataSource.data = book;
      this.loadingService.hideLoading();

      this.totalBooks = book.length;
    }, error => {
      this.loadingService.hideLoading();
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  loadBooks() {
    if (this.bookName.trim() != '') {
      this.bookService.getAllBooksByName(this.bookName).subscribe(response => {
        this.dataSource.data = response;
        this.totalBooks = response.length;
      });
    } else {
      this.getAllBooks();
    }
  }

  deleteBook(id: any) {
    if (confirm('Are you sure?')) {
      this.loadingService.showLoading();
      this.bookService.deleteBook(id);
    }
  }

  openBookDetailsDialog(bookData: any) {
    this.dialog.open(ViewBookComponent, {
      data: bookData
    });
  }
}
