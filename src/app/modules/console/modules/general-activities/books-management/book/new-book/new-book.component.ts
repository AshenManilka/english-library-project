import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl} from '@angular/forms';
import {BookService} from "../../../../../../share/services/book.service";
import {Title} from "@angular/platform-browser";
import { LoadingService } from 'src/app/modules/share/services/loading.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BookDto } from 'src/app/modules/share/dto/bookDto';
import { SnackBarService } from 'src/app/modules/share/services/snack-bar.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  ngOnInit() {
    this.title.setTitle("Book | New")
  }

  createBooksForm: FormGroup;
  bookPreviewImage?: File;
  bookResource?: File;

  constructor(
    private bookService: BookService,
    private title:Title,
    private loadingService:LoadingService,
    private fireStorageService:AngularFireStorage,
    private fireStoreService:AngularFirestore,
    private snackBarService:SnackBarService,
    private router:Router
    ) {
    this.createBooksForm = new FormGroup({
      bookName: new FormControl('',[Validators.required]),
      bookCategory: new FormControl('',[Validators.required]),
      bookPreviewImage: new FormControl('',[Validators.required]),
      bookResource: new FormControl('',[Validators.required]),
      pages: new FormControl('',[Validators.required]),
    });
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

  async createBook() {
    this.loadingService.showLoading();
    const formData = this.createBooksForm.value;
    try {
      await this.createBoook(
        formData.bookName,
        formData.bookCategory,
        this.bookPreviewImage,
        this.bookResource,
        formData.pages
      );
      this.createBooksForm.reset();
    } catch (error) {
      console.error("Error creating book:", error);
    }
  }

    async createBoook(
    bookName: string | any,
    bookCategory: string | any,
    bookPreviewImage: File | any,
    bookResource: File | any,
    pages?: string | any
  ): Promise<void> {
    try {
      const previewImageRef = this.fireStorageService.ref(`bookPreviews/${bookName}`);
      const previewImageTask = previewImageRef.put(bookPreviewImage);
      const previewImageSnapshot = await previewImageTask;
      const previewImageUrl = await previewImageSnapshot.ref.getDownloadURL();

      const resourceRef = this.fireStorageService.ref(`bookResources/${bookName}`);
      const resourceTask = resourceRef.put(bookResource);
      const resourceSnapshot = await resourceTask;
      const resourceUrl = await resourceSnapshot.ref.getDownloadURL();

      let bookId = this.bookService.generateBookId(bookCategory);
      const bookDto: BookDto = {
        bookId: bookId,
        bookName: bookName,
        bookCategory: bookCategory,
        bookPreviewImage: previewImageUrl,
        bookResource: resourceUrl,
        pages: pages,
        activeState: true,
        date: new Date().toISOString().split('T')[0]
      };
      const docRef = await this.fireStoreService.collection("Books").add(bookDto);
      this.bookService.createNewBook(bookDto, docRef.id);
      this.loadingService.hideLoading();
      this.snackBarService.snackBar("Book Saved Successfully", "close", 5000, 'ltr', 'center', 'top');
      // await this.router.navigateByUrl('/console/playground/general-activities/activities/books/manage-books/new-book');
    } catch (error) {
      this.loadingService.hideLoading();
      console.error("Error updating book:", error);
      this.snackBarService.snackBar("Error Saving The Book", "close", 5000, 'ltr', 'center', 'top');
    }
  }

}
