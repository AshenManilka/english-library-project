import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { ShareModule } from '../share/share.module';
import { PdfViewrComponent } from '../share/components/pdf-viewr/pdf-viewr.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfLinkService } from '../share/services/pdf-link.service';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ShareModule,
    PdfViewerModule
  ],
  providers:[
    // PdfLinkService
  ]
})
export class BookModule { }
