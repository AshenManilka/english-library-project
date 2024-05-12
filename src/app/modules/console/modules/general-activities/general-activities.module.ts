import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralActivitiesRoutingModule } from './general-activities-routing.module';
import { GeneralActivitiesComponent } from './general-activities.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { VideoManagementComponent } from './video-management/video-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { GeneralActivitiesContextComponent } from './general-activities-context/general-activities-context.component';
import { AllBooksComponent } from './books-management/book/all-books/all-books.component';
import { BooksContextComponent } from './books-management/book/books-context/books-context.component';
import { NewBookComponent } from './books-management/book/new-book/new-book.component';
import { UpdateBookComponent } from './books-management/book/update-book/update-book.component';
import { AllBooksContextComponent } from './books-management/book/all-books/all-books-context/all-books-context.component';
import { AllBooksTableComponent } from './books-management/book/all-books/all-books-table/all-books-table.component';
import { ViewBookComponent } from './books-management/book/all-books/view-book/view-book.component';
import { VideoContextComponent } from './video-management/video/video-context/video-context.component';
import { AllVideosComponent } from './video-management/video/all-videos/all-videos.component';
import { NewVideoComponent } from './video-management/video/new-video/new-video.component';
import { UpdateVideoComponent } from './video-management/video/update-video/update-video.component';
import { AllVideosContextComponent } from './video-management/video/all-videos/all-videos-context/all-videos-context.component';
import { AllVideosTableComponent } from './video-management/video/all-videos/all-videos-table/all-videos-table.component';
import { UpdateUserComponent } from './user-management/user-manage/update-user/update-user.component';
import { UserManageContextComponent } from './user-management/user-manage/user-manage-context/user-manage-context.component';
import { AllUsersComponent } from './user-management/user-manage/all-users/all-users.component';
import { AllUsersContetxtComponent } from './user-management/user-manage/all-users/all-users-contetxt/all-users-contetxt.component';
import { ViewUserComponent } from './user-management/user-manage/all-users/view-user/view-user.component';
import { DeleteUserComponent } from './user-management/user-manage/all-users/delete-user/delete-user.component';
import { UserAccessManageContextComponent } from './user-management/user-access-manage/user-access-manage-context/user-access-manage-context.component';
import { NewUserAccessComponent } from './user-management/user-access-manage/new-user-access/new-user-access.component';
import { UpdateUserAccessComponent } from './user-management/user-access-manage/update-user-access/update-user-access.component';
import { AllUsersAccessComponent } from './user-management/user-access-manage/all-users-access/all-users-access.component';
import { ViewUserAccessComponent } from './user-management/user-access-manage/all-users-access/view-user-access/view-user-access.component';
import { DeleteUserAccessComponent } from './user-management/user-access-manage/all-users-access/delete-user-access/delete-user-access.component';
import { AllUserAccessContextComponent } from './user-management/user-access-manage/all-users-access/all-user-access-context/all-user-access-context.component';
import { ViewVideoComponent } from './video-management/video/all-videos/view-video/view-video.component';
import { AllUsersTableComponent } from './user-management/user-manage/all-users/all-users-table/all-users-table.component';
import { AllUserAccessTableComponent } from './user-management/user-access-manage/all-users-access/all-user-access-table/all-user-access-table.component';

import {MatBadgeModule} from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import { UserProfileComponent } from './user-management/user-manage/user-profile/user-profile.component';
import { ShareModule } from 'src/app/modules/share/share.module';


@NgModule({
  declarations: [
    GeneralActivitiesComponent,
    BooksManagementComponent,
    VideoManagementComponent,
    UserManagementComponent,
    GeneralActivitiesContextComponent,
    AllBooksComponent,
    BooksContextComponent,
    NewBookComponent,
    UpdateBookComponent,
    AllBooksContextComponent,
    AllBooksTableComponent,
    ViewBookComponent,
    VideoContextComponent,
    AllVideosComponent,
    NewVideoComponent,
    UpdateVideoComponent,
    AllVideosContextComponent,
    AllVideosTableComponent,
    UpdateUserComponent,
    UserManageContextComponent,
    AllUsersComponent,
    AllUsersContetxtComponent,
    ViewUserComponent,
    DeleteUserComponent,
    UserAccessManageContextComponent,
    NewUserAccessComponent,
    UpdateUserAccessComponent,
    AllUsersAccessComponent,
    ViewUserAccessComponent,
    DeleteUserAccessComponent,
    AllUserAccessContextComponent,
    ViewVideoComponent,
    AllUsersTableComponent,
    AllUserAccessTableComponent,
    UserProfileComponent,

  ],
    imports: [
        CommonModule,
        GeneralActivitiesRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        AsyncPipe,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatExpansionModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatTabsModule,
        MatCardModule,
        ShareModule
    ]
})
export class GeneralActivitiesModule { }
