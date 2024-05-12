import { LoadingService } from './../../../../../../share/services/loading.service';
import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../../../../share/services/book.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})

export class UpdateBookComponent implements OnInit{

  bookName = "";
  books: Array<any> = [];
  updateBooksForm!: FormGroup;
  bookPreviewImage?: File;
  bookResource?: File;
  id!: string;
  data!: any;

  constructor(
    private bookService: BookService,
     private route: ActivatedRoute,
     private title:Title,
     private loadingService:LoadingService


     ) {

  }

  ngOnInit() {
    this.updateBooksForm = new FormGroup({
      bookId: new FormControl(""),
      bookName: new FormControl('', [Validators.required]),
      bookCategory: new FormControl('', [Validators.required]),
      bookPreviewImage: new FormControl('', [Validators.required]),
      bookResource: new FormControl('', [Validators.required]),
      pages: new FormControl('', [Validators.required]),
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.loadingService.showLoading();
    this. getBookById();
    this.title.setTitle("Book | Update")
  }


  getBookById() {
    this.bookService.getAllBooksById(this.id).subscribe((response: any) => {
      this.data = response;
      if (response) {
        const bookData = response;
        this.loadingService.hideLoading();
        if (bookData) {
          this.updateBooksForm.patchValue({
            bookId: bookData.bookId,
            bookName: bookData.bookName,
            bookCategory: bookData.bookCategory,
            pages: bookData.pages,
          });
        } else {
          this.updateBooksForm.reset();
        }
      } else {
        this.updateBooksForm.reset();
        this.loadingService.hideLoading();
      }
    });
  }

  loadBooks() {
    console.log('loadBooks');
    this.bookService.getAllBooksByName(this.bookName).subscribe(response => {
      console.log(response)
      if (response) {
        const bookData = response[0];
        if (bookData) {
          this.updateBooksForm.patchValue({
            bookId: bookData.bookId,
            bookName: bookData.bookName,
            bookCategory: bookData.bookCategory,
            pages: bookData.pages,
          });
        } else {
          this.updateBooksForm.reset();
        }
      } else {
        this.updateBooksForm.reset();
      }
    });
  }
  async updateBook() {
    this.loadingService.showLoading();
    const formData = this.updateBooksForm.value;
    try {
      await this.bookService.updateBook(
        this.id,
        formData.bookName,
        formData.bookCategory,
        this.bookPreviewImage,
        this.bookResource,
        formData.pages
      );
      this.updateBooksForm.reset();

    } catch (error) {
      console.error("Error Updating book:", error);
      this.loadingService.hideLoading();
    }
  }

  onFileChange(event: any, fileType: string) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      if (fileType === 'previewImage') {
        this.bookPreviewImage = file;
      } else if (fileType === 'bookResource') {
        this.bookResource = file;
      }
    }
  }
}
