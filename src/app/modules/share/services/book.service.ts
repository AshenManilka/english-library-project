import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {SnackBarService} from "./snack-bar.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {BookDto} from "../dto/bookDto";
import {catchError, Observable, switchMap, throwError} from "rxjs";
import {map} from "rxjs/operators";
import firebase from "firebase/compat";
import ListResult = firebase.storage.ListResult;
import {BookUpdateDto} from "../dto/bookUpdateDto";
import {LoadingService} from './loading.service';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  orders!: Observable<any[]>;

  constructor(private router: Router,
              private snackBarService: SnackBarService,
              private fireStoreService: AngularFirestore,
              private fireStorageService: AngularFireStorage,
              private loadingService: LoadingService
  ) {
  }
  public createNewBook(book: BookDto, id: string) {
    this.fireStoreService.collection("Books").doc(id).set(book).then(() => {
    }).catch((error) => {
    })
  }

  public generateBookId(category: string, length: number = 3): string {
    let prefix = '';
    switch (category.toUpperCase()) {
      case 'FREE':
        prefix = 'FREE';
        break;
      case 'GRAMMAR':
        prefix = 'GRAM';
        break;
      case 'DIALOGUES':
        prefix = 'DLOG';
        break;
      case 'SENTENCE PATTERN':
        prefix = 'SENT';
        break;
      default:
        prefix = 'UNKNOWN';
    }
    let result = prefix + '-';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }


  public async updateBook(
    id: string | any,
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

      const bookDto: BookUpdateDto = {
        bookName: bookName,
        bookCategory: bookCategory,
        bookPreviewImage: previewImageUrl,
        bookResource: resourceUrl,
        pages: pages,
        activeState: true,
        date: new Date().toISOString().split('T')[0]
      };
      this.updateExistingBook(bookDto, id);
      this.loadingService.showLoading();
      this.snackBarService.snackBar("Book Updated Successfully", "close", 5000, 'ltr', 'center', 'top');
      await this.router.navigateByUrl('/console/playground/general-activities/activities/books/manage-books/all-books/manage-all-books/all-book-table');
    } catch (error) {
      this.loadingService.hideLoading();
      this.snackBarService.snackBar("Error Updating The Book", "close", 5000, 'ltr', 'center', 'top');
    }
  }

  private updateExistingBook(book: BookUpdateDto, id: string) {
    this.fireStoreService.collection("Books").doc(id).update(book).then(() => {}).catch((error) => {})
  }

  public getAllBooksCount(): Observable<number> {
    return this.fireStoreService.collection('Books', ref =>
      ref.where('activeState', '==', true))
      .get()
      .pipe(map(snapshot => snapshot.size));
  }

  getAllBooksByName(bookName: string): Observable<any[]> {
    return this.fireStoreService.collection('Books', ref =>
      ref.where('bookName', '>=', bookName)
        .where('bookName', '<=', bookName + '\uf8ff')
        .orderBy('bookName')
    )
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {id, ...(data as any)};
          });
        })
      );
  }

  getAllBooksByBookCategory(bookCategory: string): Observable<any[]> {
    return this.fireStoreService.collection('Books', ref =>
      ref.where('bookCategory', '==', bookCategory)
        .orderBy("bookName",'asc')
    )
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {id, ...(data as any)};
          });
        })
      );
  }

  getAllBooksById(id: string): Observable<any[]> {
    return this.fireStoreService.collection('Books').doc(id)
      .snapshotChanges()
      .pipe(
        map(action => {
          const data = action.payload.data() as BookDto;
          const id = action.payload.id;
          return {id, ...(data as any)};
        })
      );
  }

  getAllBooks(): Observable<any[]> {
    return this.fireStoreService.collection('Books',ref =>
      ref.orderBy('bookName','asc'))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {id, ...data as any};
          });
        })
      );
  }

  public async deleteBook(id: any) {
    try {
      this.getBookPreviewImageUrl(id).subscribe(
        bookPreviewImageUrl => {
          this.fireStorageService.storage.refFromURL(bookPreviewImageUrl).delete()
            .then(() => {
              this.getBookResourceUrl(id).subscribe(
                bookResourceUrl => {
                  this.fireStorageService.storage.refFromURL(bookResourceUrl).delete()
                    .then(() => {
                      this.fireStoreService.collection('Books').doc(id).delete()
                        .then(() => {
                          this.snackBarService.snackBar("Book Deleted", "close", 5000, 'ltr', 'center', 'top');
                        })
                        .catch(error => {
                          this.snackBarService.snackBar("Error Deleting The Book", "close", 5000, 'ltr', 'center', 'top');
                        });
                    })
                },
              );
            })
        },
      );
    } catch (error) {
      this.snackBarService.snackBar("Error Deleting The Book", "close", 5000, 'ltr', 'center', 'top');
    }
  }


  private getBookPreviewImageUrl(bookId: string): Observable<string> {
    return this.fireStoreService.collection('Books').doc(bookId).get().pipe(
      map(bookDoc => {
        if (!bookDoc.exists) {
          throw new Error('Book not found');
        }
        const data = bookDoc.data() as BookDto;
        const url = data.bookPreviewImage;
        if (!url) {
          throw new Error('bookPreviewImage not found');
        }
        return url;
      })
    );
  }

  private getBookResourceUrl(bookId: string): Observable<string> {
    return this.fireStoreService.collection('Books').doc(bookId).get().pipe(
      map(bookDoc => {
        if (!bookDoc.exists) {
          throw new Error('Book not found');
        }
        const data = bookDoc.data() as BookDto;
        const url = data.bookResource;
        if (!url) {
          throw new Error('bookPreviewImage not found');
        }
        return url;
      })
    );
  }


}
