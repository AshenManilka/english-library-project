import { ViewUserComponent } from './user-management/user-manage/all-users/view-user/view-user.component';
import { AllUsersContetxtComponent } from './user-management/user-manage/all-users/all-users-contetxt/all-users-contetxt.component';
import { AllVideosContextComponent } from './video-management/video/all-videos/all-videos-context/all-videos-context.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralActivitiesComponent } from './general-activities.component';
import { GeneralActivitiesContextComponent } from './general-activities-context/general-activities-context.component';
import { BooksContextComponent } from './books-management/book/books-context/books-context.component';
import { NewBookComponent } from './books-management/book/new-book/new-book.component';
import { AllBooksComponent } from './books-management/book/all-books/all-books.component';
import { AllBooksContextComponent } from './books-management/book/all-books/all-books-context/all-books-context.component';
import { AllBooksTableComponent } from './books-management/book/all-books/all-books-table/all-books-table.component';
import { ViewBookComponent } from './books-management/book/all-books/view-book/view-book.component';
import { UpdateBookComponent } from './books-management/book/update-book/update-book.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { VideoManagementComponent } from './video-management/video-management.component';
import { NewVideoComponent } from './video-management/video/new-video/new-video.component';
import { AllVideosComponent } from './video-management/video/all-videos/all-videos.component';
import { AllVideosTableComponent } from './video-management/video/all-videos/all-videos-table/all-videos-table.component';
import { ViewVideoComponent } from './video-management/video/all-videos/view-video/view-video.component';
import { UpdateVideoComponent } from './video-management/video/update-video/update-video.component';
import { VideoContextComponent } from './video-management/video/video-context/video-context.component';
import { UserManageContextComponent } from './user-management/user-manage/user-manage-context/user-manage-context.component';
import { AllUsersComponent } from './user-management/user-manage/all-users/all-users.component';
import { AllUsersTableComponent } from './user-management/user-manage/all-users/all-users-table/all-users-table.component';
import { UpdateUserComponent } from './user-management/user-manage/update-user/update-user.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserAccessManageContextComponent } from './user-management/user-access-manage/user-access-manage-context/user-access-manage-context.component';
import { NewUserAccessComponent } from './user-management/user-access-manage/new-user-access/new-user-access.component';
import { AllUserAccessContextComponent } from './user-management/user-access-manage/all-users-access/all-user-access-context/all-user-access-context.component';
import { AllUserAccessTableComponent } from './user-management/user-access-manage/all-users-access/all-user-access-table/all-user-access-table.component';
import { ViewUserAccessComponent } from './user-management/user-access-manage/all-users-access/view-user-access/view-user-access.component';
import { UpdateUserAccessComponent } from './user-management/user-access-manage/update-user-access/update-user-access.component';
import { AllUsersAccessComponent } from './user-management/user-access-manage/all-users-access/all-users-access.component';

const routes: Routes = [
  {
    path: '', component: GeneralActivitiesComponent, children: [
      { path: '', redirectTo: 'activities', pathMatch: 'full' },
      {
        path: 'activities', component: GeneralActivitiesContextComponent, children: [

          { path: '', redirectTo: 'books', pathMatch: 'full' },
          {
            path: 'books', component: BooksManagementComponent, children: [
              { path: '', redirectTo: 'manage-books', pathMatch: 'full' },
              {
                path: 'manage-books', component: BooksContextComponent, children: [
                  { path: '', redirectTo: 'new-book', pathMatch: 'full' },
                  { path: 'new-book', component: NewBookComponent },
                  {
                    path: 'all-books', component: AllBooksComponent, children: [
                      { path: '', redirectTo: 'manage-all-books', pathMatch: 'full' },
                      {
                        path: 'manage-all-books', component: AllBooksContextComponent, children: [
                          { path: '', redirectTo: 'all-book-table', pathMatch: 'full' },
                          { path: 'all-book-table', component: AllBooksTableComponent },
                          { path: 'view-book', component: ViewBookComponent },
                          { path: 'update-book/:id', component: UpdateBookComponent }
                        ]
                      }
                    ]
                  }
                ]
              },
              // {
              //   path: 'manage-books-category', component: BookCategoryContextComponent, children: [
              //     { path: '', redirectTo: 'new-book-category', pathMatch: 'full' },
              //     { path: 'new-book-category', component: NewBookCategoryComponent },
              //     {
              //       path: 'all-books-category', component: AllBookCategoryComponent, children: [
              //         { path: '', redirectTo: 'manage-all-books-categories', pathMatch: 'full' },
              //         {
              //           path: 'manage-all-books-categories', component: AllBookCategoryContextComponent, children: [
              //             { path: '', redirectTo: 'all-book-category-table', pathMatch: 'full' },
              //             { path: 'all-book-category-table', component: AllBookCategoryTableComponent },
              //             { path: 'view-book-category', component: ViewBookCategoryComponent },
              //             { path: 'update-book-category', component: UpdateBookCategoryComponent }
              //           ]
              //         }
              //       ]
              //     }
              //   ]
              // },

            ]
          },
          {
            path: 'videos', component: VideoManagementComponent, children: [
              { path: '', redirectTo: 'manage-videos', pathMatch: 'full' },
              {
                path: 'manage-videos', component: VideoContextComponent, children: [
                  { path: '', redirectTo: 'new-video', pathMatch: 'full' },
                  { path: 'new-video', component: NewVideoComponent },
                  {
                    path: 'all-videos', component: AllVideosComponent, children: [
                      { path: '', redirectTo: 'manage-all-videos', pathMatch: 'full' },
                      {
                        path: 'manage-all-videos', component: AllVideosContextComponent, children: [
                          { path: '', redirectTo: 'all-video-table', pathMatch: 'full' },
                          { path: 'all-video-table', component: AllVideosTableComponent },
                          { path: 'view-video', component: ViewVideoComponent },
                          { path: 'update-video', component: UpdateVideoComponent }
                        ]
                      }
                    ]
                  }
                ]
              },
            ]
          },

          {
            path: 'user', component:UserManagementComponent, children: [
              { path: '', redirectTo: 'manage-user', pathMatch: 'full' },
              {
                path: 'manage-user', component: UserManageContextComponent, children: [
                  { path: '', redirectTo: 'all-users', pathMatch: 'full' },
                  {
                    path: 'all-users', component:AllUsersComponent, children: [
                      { path: '', redirectTo: 'manage-all-users', pathMatch: 'full' },
                      {
                        path: 'manage-all-users', component: AllUsersContetxtComponent, children: [
                          { path: '', redirectTo: 'all-users-table', pathMatch: 'full' },
                          { path: 'all-users-table', component:AllUsersTableComponent },
                          { path: 'view-user', component: ViewUserComponent },
                          { path: 'update-user', component: UpdateUserComponent }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                path: 'manage-user-access', component: UserAccessManageContextComponent, children: [
                  { path: '', redirectTo: 'new-user-access', pathMatch: 'full' },
                  { path: 'new-user-access', component: NewUserAccessComponent },
                  {
                    path: 'all-user-access', component: AllUsersAccessComponent, children: [
                      { path: '', redirectTo: 'manage-all-users-access', pathMatch: 'full' },
                      {
                        path: 'manage-all-users-access', component: AllUserAccessContextComponent, children: [
                          { path: '', redirectTo: 'all-user-access-table', pathMatch: 'full' },
                          { path: 'all-user-access-table', component: AllUserAccessTableComponent },
                          { path: 'view-user-access', component: ViewUserAccessComponent },
                          { path: 'update-user-access', component: UpdateUserAccessComponent }
                        ]
                      }
                    ]
                  }
                ]
              },

            ]
          },


        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralActivitiesRoutingModule { }
