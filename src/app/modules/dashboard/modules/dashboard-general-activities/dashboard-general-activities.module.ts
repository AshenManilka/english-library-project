import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardGeneralActivitiesRoutingModule } from './dashboard-general-activities-routing.module';
import { DashboardGeneralActivitiesComponent } from './dashboard-general-activities.component';
import { BooksComponent } from './books/books.component';
import { VideosComponent } from './videos/videos.component';
import { DashboardGeneralActivitesContextComponent } from './dashboard-general-activites-context/dashboard-general-activites-context.component';
import { DashboardBookManagementComponent } from './books/inner-items/dashboard-book-management/dashboard-book-management.component';
import { DashboardFreeBooksComponent } from './books/inner-items/dashboard-free-books/dashboard-free-books.component';
import { DashboardGrammerBooksComponent } from './books/inner-items/dashboard-grammer-books/dashboard-grammer-books.component';
import { DashboardSentencePatternsBooksComponent } from './books/inner-items/dashboard-sentence-patterns-books/dashboard-sentence-patterns-books.component';
import { DashboardDialoguesBooksComponent } from './books/inner-items/dashboard-dialogues-books/dashboard-dialogues-books.component';
import { DashboardVideoManagementComponent } from './videos/inner-items/dashboard-video-management/dashboard-video-management.component';
import { DashboardDialogsVideosComponent } from './videos/inner-items/dashboard-dialogs-videos/dashboard-dialogs-videos.component';
import { DashboardFreeVideosComponent } from './videos/inner-items/dashboard-free-videos/dashboard-free-videos.component';
import { DashboardGrammarVideosComponent } from './videos/inner-items/dashboard-grammar-videos/dashboard-grammar-videos.component';
import { DashboardPatternsVideosComponent } from './videos/inner-items/dashboard-patterns-videos/dashboard-patterns-videos.component';
import { ShareModule } from 'src/app/modules/share/share.module';
import { LoadingService } from 'src/app/modules/share/services/loading.service';
import { LoadingSpinnerComponent } from 'src/app/modules/share/components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    DashboardGeneralActivitiesComponent,
    BooksComponent,
    VideosComponent,
    DashboardGeneralActivitesContextComponent,
    DashboardBookManagementComponent,
    DashboardFreeBooksComponent,
    DashboardGrammerBooksComponent,
    DashboardSentencePatternsBooksComponent,
    DashboardDialoguesBooksComponent,
    DashboardVideoManagementComponent,
    DashboardDialogsVideosComponent,
    DashboardFreeVideosComponent,
    DashboardGrammarVideosComponent,
    DashboardPatternsVideosComponent,
  ],
  imports: [
    CommonModule,
    DashboardGeneralActivitiesRoutingModule,
    ShareModule,

  ],
  providers:[
    LoadingService,

  ]

})
export class DashboardGeneralActivitiesModule { }
