import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../../../../share/services/book.service";

@Component({
  selector: 'app-grammar-books',
  templateUrl: './grammar-books.component.html',
  styleUrls: ['./grammar-books.component.scss']
})
export class GrammarBooksComponent implements OnInit {

  ngOnInit() {
    this.bookService.getAllBooksByBookCategory("GRAMMAR").subscribe(response => {
      this.grammarBooks = response;
    })
  }

  constructor(private bookService: BookService) {
  }

  paid: boolean = false;

  categoryTitle: string = 'English Grammar Books';
  description: string = 'Tenses (Active Voice & Passive Voice), Auxiliaries & Modals, Phrases & Clauses පාඩම් මෙම පොත් වල අන්තර්ගත වේ.';

  grammarBooks: any[] = [];
}
