import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MainFooterContextComponent } from './components/main-footer-context/main-footer-context.component';
import { MainHeaderContextComponent } from './components/main-header-context/main-header-context.component';
import { MainHeaderNavBarComponent } from './components/main-header-context/inner-items/main-header-nav-bar/main-header-nav-bar.component';
import { MainHeaderTopBarComponent } from './components/main-header-context/inner-items/main-header-top-bar/main-header-top-bar.component';
import { MainFooterBottomBarComponent } from './components/main-footer-context/inner-items/main-footer-bottom-bar/main-footer-bottom-bar.component';
import { MainFooterNavAreaComponent } from './components/main-footer-context/inner-items/main-footer-nav-area/main-footer-nav-area.component';
import { BookDisplayComponent } from './components/book-display/book-display.component';
import { VideoDisplayComponent } from './components/video-display/video-display.component';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { BottomToTopComponent } from './components/bottom-to-top/bottom-to-top.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewrComponent } from './components/pdf-viewr/pdf-viewr.component';

import { PdfLinkService } from './services/pdf-link.service';
import { SectionDeviderComponent } from './components/section-devider/section-devider.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MatDialogModule } from '@angular/material/dialog';



import {MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoadingService } from './services/loading.service';
import { UserLoginTimeService } from './services/user-login-time.service';
import { HomeLoadingPageComponent } from './components/home-loading-page/home-loading-page.component';
import { AlertComponent } from './components/alert/alert.component';




@NgModule({
    declarations: [
        ShareComponent,
        MainFooterContextComponent,
        MainHeaderContextComponent,
        MainHeaderNavBarComponent,
        MainHeaderTopBarComponent,
        MainFooterBottomBarComponent,
        MainFooterNavAreaComponent,
        BookDisplayComponent,
        VideoDisplayComponent,
        SafeUrlPipe,
        BottomToTopComponent,
        PdfViewrComponent,
        SectionDeviderComponent,
        UserProfileComponent,
        ConfirmDialogComponent,
        UserAvatarComponent,
        LoadingSpinnerComponent,
        HomeLoadingPageComponent,
        AlertComponent,




    ],
  exports: [
    MainHeaderContextComponent,
    MainFooterContextComponent,
    BookDisplayComponent,
    VideoDisplayComponent,
    BottomToTopComponent,
    PdfViewrComponent,
    SectionDeviderComponent,
    UserProfileComponent,
    ConfirmDialogComponent,
    LoadingSpinnerComponent,
    HomeLoadingPageComponent,
    AlertComponent



  ],
    imports: [
        CommonModule,
        ShareRoutingModule,
        PdfViewerModule,
        MatDialogModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        AsyncPipe,

         MatDividerModule,
         MatIconModule,
         MatTableModule,
         MatSlideToggleModule,
         MatPaginatorModule,
         MatTooltipModule,
         MatDialogModule,
         MatButtonModule,
         MatProgressSpinnerModule,
         AngularFireAuthModule,
         ReactiveFormsModule,
         MatMenuModule

    ],
    providers:[
      PdfLinkService,
      LoadingService,


    ]
})
export class ShareModule { }
