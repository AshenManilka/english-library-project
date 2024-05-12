import { DashboardDialogsVideosComponent } from './videos/inner-items/dashboard-dialogs-videos/dashboard-dialogs-videos.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGeneralActivitiesComponent } from './dashboard-general-activities.component';
import { GeneralActivitiesContextComponent } from 'src/app/modules/console/modules/general-activities/general-activities-context/general-activities-context.component';
import { DashboardBookManagementComponent } from './books/inner-items/dashboard-book-management/dashboard-book-management.component';
import { DashboardFreeBooksComponent } from './books/inner-items/dashboard-free-books/dashboard-free-books.component';
import { DashboardGeneralActivitesContextComponent } from './dashboard-general-activites-context/dashboard-general-activites-context.component';
import { DashboardGrammerBooksComponent } from './books/inner-items/dashboard-grammer-books/dashboard-grammer-books.component';
import { DashboardDialoguesBooksComponent } from './books/inner-items/dashboard-dialogues-books/dashboard-dialogues-books.component';
import { DashboardSentencePatternsBooksComponent } from './books/inner-items/dashboard-sentence-patterns-books/dashboard-sentence-patterns-books.component';
import { DashboardVideoManagementComponent } from './videos/inner-items/dashboard-video-management/dashboard-video-management.component';
import { DashboardFreeVideosComponent } from './videos/inner-items/dashboard-free-videos/dashboard-free-videos.component';
import { DashboardGrammarVideosComponent } from './videos/inner-items/dashboard-grammar-videos/dashboard-grammar-videos.component';
import { DashboardPatternsVideosComponent } from './videos/inner-items/dashboard-patterns-videos/dashboard-patterns-videos.component';

const routes: Routes = [
  {
    path: '', component: DashboardGeneralActivitiesComponent, children: [
      { path: '', redirectTo: 'activities', pathMatch: 'full' },
      {
        path: 'activities', component: DashboardGeneralActivitesContextComponent, children: [
          {path: '',redirectTo:'books',pathMatch:'full'},
          {
            path:'books',component:DashboardBookManagementComponent,children:[
              {path:'', redirectTo:'free-books',pathMatch:'full'},
              {path:'free-books',component:DashboardFreeBooksComponent},
              {path:'grammar',component:DashboardGrammerBooksComponent},
              {path:'dialogs',component:DashboardDialoguesBooksComponent},
              {path:'patterns',component:DashboardSentencePatternsBooksComponent}

            ]
          },
          {
            path:'videos',component:DashboardVideoManagementComponent ,children:[
              {path:'', redirectTo:'free-videos',pathMatch:'full'},
              {path:'free-videos',component:DashboardFreeVideosComponent},
              {path:'grammar',component:DashboardGrammarVideosComponent},
              {path:'dialogs',component:DashboardDialogsVideosComponent},
              {path:'patterns',component:DashboardPatternsVideosComponent}

            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardGeneralActivitiesRoutingModule { }
