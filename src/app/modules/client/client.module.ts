import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomePageContextComponent } from './components/home-page/home-page-context/home-page-context.component';
import { HomePageMainSliderComponent } from './components/home-page/home-page-main-slider/home-page-main-slider.component';
import { HomePageReviewsComponent } from './components/home-page/home-page-reviews/home-page-reviews.component';
import { HomePageBookCategoriesComponent } from './components/home-page/home-page-book-categories/home-page-book-categories.component';

import {ShareModule} from "../share/share.module";
import { AboutUsPageContextComponent } from './components/about-us/about-us-page-context/about-us-page-context.component';


import { CarouselModule } from 'ngx-owl-carousel-o';

import { ScrollService } from '../share/services/scroll.service';
import { HomePageBookCategoryMenuComponent } from './components/home-page/home-page-book-category-menu/home-page-book-category-menu.component';
import { PdfLinkService } from '../share/services/pdf-link.service';
import { NavbarService } from '../share/services/navbar.service';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FreeBooksComponent } from './components/home-page/home-page-book-categories/inner-items/free-books/free-books.component';
import { GrammarBooksComponent } from './components/home-page/home-page-book-categories/inner-items/grammar-books/grammar-books.component';
import { SentencePatternsBooksComponent } from './components/home-page/home-page-book-categories/inner-items/sentence-patterns-books/sentence-patterns-books.component';
import { DialoguesBooksComponent } from './components/home-page/home-page-book-categories/inner-items/dialogues-books/dialogues-books.component';
import { VideosComponent } from './components/home-page/home-page-book-categories/inner-items/videos/videos.component';


@NgModule({
  declarations: [
    ClientComponent,
    HomePageContextComponent,
    HomePageMainSliderComponent,
    HomePageReviewsComponent,
    HomePageBookCategoriesComponent,
    AboutUsPageContextComponent,
    HomePageBookCategoryMenuComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    FreeBooksComponent,
    GrammarBooksComponent,
    SentencePatternsBooksComponent,
    DialoguesBooksComponent,
    VideosComponent


  ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        ShareModule,
        CarouselModule,
        MatExpansionModule,
        NgOptimizedImage


    ],
  providers:[
    ScrollService,
    NavbarService
    // PdfLinkService
  ]
})
export class ClientModule { }
