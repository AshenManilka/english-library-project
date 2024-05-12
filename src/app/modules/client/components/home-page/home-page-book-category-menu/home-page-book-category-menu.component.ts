import { Component} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import { ScrollService } from 'src/app/modules/share/services/scroll.service';

@Component({
  selector: 'app-home-page-book-category-menu',
  templateUrl: './home-page-book-category-menu.component.html',
  styleUrls: ['./home-page-book-category-menu.component.scss']
})
export class HomePageBookCategoryMenuComponent {


  constructor(
    private scrollService: ScrollService,


    ) {}

  linkButtons:any[]=[
    { title:'Free Books' , sectionId:'freeBook' },
    { title:'Grammar' , sectionId:'grammar' },
    { title:'Sentence Patterns' , sectionId:'sentencePatterns'},
    { title:'Dialogues' , sectionId:'dialogues'},
    { title:'Video Lessons' , sectionId:'videoLessons'},

  ];
  linkButtonOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    // navSpeed: 700,
    dots:false,
    autoplay: true,
    autoplayTimeout:3000,
    smartSpeed:1000,
    autoplayHoverPause: true,
    margin:0,
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      600:{
        items:3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: false
  };

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

}
