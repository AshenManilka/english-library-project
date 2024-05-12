import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../../../../share/services/book.service";

@Component({
  selector: 'app-sentence-patterns-books',
  templateUrl: './sentence-patterns-books.component.html',
  styleUrls: ['./sentence-patterns-books.component.scss']
})
export class SentencePatternsBooksComponent implements OnInit{

  ngOnInit() {
    this.bookService.getAllBooksByBookCategory("SENTENCE_PATTERN").subscribe(response=>{
      this.sentencePatternsBooks = response;
    })
  }
  constructor(private bookService:BookService) {
  }

  paid : boolean = false;

  description:string='ඉංග්‍රීසි කතා කිරීමට අත්‍යවශ්‍ය ව්‍යාකරණ පාඩම්වල ඇතුලත් නොවන වාක්‍ය ආකෘති මෙම පොත්වල අන්තර්ගත වේ.';
  categoryTitle:string='English Sentence Patterns';

  sentencePatternsBooks:any[]=[];


}
