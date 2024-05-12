
import {Component, OnInit} from '@angular/core';
import { LoadingService } from 'src/app/modules/share/services/loading.service';
import { CookieService } from 'ngx-cookie-service';
import { BookService } from 'src/app/modules/share/services/book.service';

@Component({
  selector: 'app-dashboard-free-books',
  templateUrl: './dashboard-free-books.component.html',
  styleUrls: ['./dashboard-free-books.component.scss']
})
export class DashboardFreeBooksComponent implements OnInit{

  paid : boolean= true;


  freeBooks:any[]=JSON.parse(this.cookieService.get('userFreeBookArray') || '[]') as any[];

  userBooks!: any[];
  userEmail!: string | null;


  constructor(

     private loadingService:LoadingService,
     private cookieService:CookieService,
     private bookService:BookService
     ) {
  }


  ngOnInit() {
    this.loadingService.showLoading();
    if(this.freeBooks.length === 0){
      this.bookService.getAllBooksByBookCategory("FREE").subscribe(response=>{
        this.freeBooks = response;
         this.cookieService.set('userFreeBookArray', JSON.stringify(this.freeBooks));
         this.loadingService.hideLoading();
      });
    }
    else{
      this.loadingService.hideLoading();
    }
}
}
