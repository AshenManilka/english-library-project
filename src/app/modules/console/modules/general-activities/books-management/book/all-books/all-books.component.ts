import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent {
  constructor(private title:Title) {
    this.title.setTitle("Book | All")
  }

}
