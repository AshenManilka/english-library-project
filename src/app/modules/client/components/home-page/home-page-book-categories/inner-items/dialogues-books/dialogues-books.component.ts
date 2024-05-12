import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../../../../share/services/book.service";

@Component({
  selector: 'app-dialogues-books',
  templateUrl: './dialogues-books.component.html',
  styleUrls: ['./dialogues-books.component.scss']
})
export class DialoguesBooksComponent implements OnInit{
  ngOnInit() {
    this.bookService.getAllBooksByBookCategory("DIALOGUES").subscribe(response=>{
      this.dialoguesBooks = response;
    })
  }
  constructor(private bookService:BookService) {
  }

  paid : boolean = false;

  categoryTitle:string ='English Conversational Dialogues';
  description:string='විවිධ තේමා යටතේ පුද්ගලයන් අතර එදිනෙදා ඇතිවන සංවාද මෙම පොත්වල අන්තර්ගත වේ.';
  dialoguesBooks:any[]=[];
}
