import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../../../../share/services/book.service";

@Component({
  selector: 'app-free-books',
  templateUrl: './free-books.component.html',
  styleUrls: ['./free-books.component.scss']
})
export class FreeBooksComponent implements OnInit{
  paid : boolean = true;
  description:string='මෙම පොතෙහි ඒකවචන නාමපද බහුවචන කිරීම, අව්‍යපද, නාමවිශේෂණ පද, ක්‍රියවිශේෂණ පද, නිපාත පද, Be Verbs සහ Ordinary Words අතර වෙනස පැහැදිලි කර ඇත.';
  categoryTitle:string=' Free English Books';
  freeBooks:any[]=[];

  // freeBooks:any[]=[
  //   {bookName:'Word Classes' , bookId: '1' , pages:'44',bookPreviewImage:'https://anyideainenglish.com/books/1/cover.jpg', bookResource:'https://firebasestorage.googleapis.com/v0/b/vibeapp-e9365.appspot.com/o/pdf%2Flionbridge-doc.pdf?alt=media&token=37e1cb2b-09c9-44ae-b935-79aa7cbdfc70',paid:this.paid},
  // ];

  ngOnInit() {
   this.bookService.getAllBooksByBookCategory("FREE").subscribe(response=>{
     this.freeBooks = response;
   })
  }

  constructor(private bookService:BookService) {}



}
